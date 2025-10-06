import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const data = await import('@/data/merchants.json');
  return NextResponse.json(data.default, { status: 200 });
}