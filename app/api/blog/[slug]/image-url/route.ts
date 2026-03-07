import { getSignedUrl } from '@/lib/gcp';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ slug: string }> },
) {
    await params;
    const file = new URL(req.url).searchParams.get('file');
    if (!file)
        return NextResponse.json(
            { error: 'Missing file param' },
            { status: 400 },
        );
    const imageUrl = await getSignedUrl(file);
    return NextResponse.json({ imageUrl });
}
