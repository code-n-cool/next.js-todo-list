import { NextRequest, NextResponse } from 'next/server';
import { getUsers } from '@/lib/apiClient';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);

    try {
        const data = await getUsers(q, page);
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json(
            { error: error?.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}
