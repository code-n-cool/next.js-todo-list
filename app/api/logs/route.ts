import { NextRequest, NextResponse } from 'next/server';
import axiosClient from '@/lib/axiosClient';

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        await axiosClient.post('/logs', body);
        return NextResponse.json({ status: 'ok' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
