import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { event_type, payload } = await request.json();
    const consent = request.headers.get('x-cookie-consent');

    // Final check for consent of cookies
    let finalPayload = { ...payload };
    if (consent !== 'accepted') {
      finalPayload.userAgent = 'Anonymized';
    }
    // The "Store" phase: Writing to Supabase
    const { data, error } = await supabaseAdmin
      .from('tracking_events')
      .insert([{ 
        event_type,
        payload: finalPayload, 
        sync_status: 'PENDING' // Initial status for the Forwarder 
      }]);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}