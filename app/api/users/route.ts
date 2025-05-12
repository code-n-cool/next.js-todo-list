import { NextRequest, NextResponse } from 'next/server';
import axiosClient from '@/lib/axiosClient';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q') || '';
    const page = searchParams.get('page') || '1';

    try {
        const res = await axiosClient.get(`/users?q=${q}&page=${page}`);
        return NextResponse.json(res.data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
