import { NextRequest, NextResponse } from 'next/server';
import axiosClient from '@/lib/axiosClient';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('id');
  console.log("[debug]", userId);
  try {
    console.log("[debug]", "before fetch");
    const res = await axiosClient.get(`/users/${userId}`);
    console.log("[debug]", "after fetch");
    return NextResponse.json(res.data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || error.message;
    return NextResponse.json({ error: message }, { status });
  }
}
