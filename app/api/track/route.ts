import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { event_type, payload } = await request.json();

    // The "Store" phase: Writing to Supabase
    const { data, error } = await supabaseAdmin
      .from('tracking_events')
      .insert([{ 
        event_type,
        payload, 
        sync_status: 'PENDING' // Initial status for the Forwarder 
      }]);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}