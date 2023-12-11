import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
// Name, Symbol, Slug, Amount
export async function POST(request: Request) {
  // try {
	console.log(request.body);
    // const result = await sql`
	// 	INSERT INTO Assets (Name, Symbol, Slug, Amount)
	// 	VALUES ('Ethereum', 'ETH', 'ethereum', 42.42);
    // `;

  //   return NextResponse.json({ result }, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
}
