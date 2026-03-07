import { getTextFile } from '@/lib/gcp';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ slug: string }> },
) {
    await params;
    const file = new URL(req.url).searchParams.get('file');
    if (!file) return new NextResponse('Missing file param', { status: 400 });
    const text = await getTextFile(file);
    return new NextResponse(text, {
        headers: { 'Content-Type': 'text/plain' },
    });
}
