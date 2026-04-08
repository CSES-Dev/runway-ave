import { getBlogList } from '@/lib/gcp';
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await getBlogList();
    return NextResponse.json(data.posts);
}
