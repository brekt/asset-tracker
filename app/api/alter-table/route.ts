import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result = await sql`
		ALTER TABLE Assets
		ADD COLUMN Exchange VARCHAR(255)
    ADD COLUMN Tags VARCHAR(255)
    ADD
	`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
