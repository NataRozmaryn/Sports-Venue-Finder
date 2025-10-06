import { NextResponse } from 'next/server';

export async function GET() {
  const data = await import('@/data/merchants.json');
  return NextResponse.json(data.default, { status: 200 });
}