import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '@/lib/apiClient';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('id');

  if (!userId) {
    return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
  }

  try {
    const user = await getUserById(userId);
    return NextResponse.json(user);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || error.message;
    return NextResponse.json({ error: message }, { status });
  }
}
