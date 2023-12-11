import { sql } from '@vercel/postgres';

// https://etherscan.io/address/0xa88A7E30E2DD434857bb9458d30560490673cE4c
// Name, Symbol, Slug, Amount

async function submitForm(formData: FormData) {
  'use server'
  const name: any = formData.get('name');
  const symbol: any = formData.get('symbol');
  const slug: any = formData.get('slug');
  const amount: any = formData.get('amount');

  const result = await sql`
		INSERT INTO Assets (Name, Symbol, Slug, Amount)
		VALUES (${name}, ${symbol}, ${slug}, ${amount});
  `;

  console.log(result);

  return {
    message: ''
  }
}

export default function AddAssetForm() {
  'use client';
 
  return (
    <form className="w-full max-w-sm" action={submitForm}>
      <div className="flex items-center py-2 space-x-4">
        <label>
          Name:
          <input className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="name" name="name" required />
        </label>
        <label>
          Symbol:
          <input className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" area-label="symbol" name="symbol" required />
        </label>
        <label>
          Slug:
          <input className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" area-label="slug" name="slug" />
        </label>
        <label>
          Amount:
          <input className="appearance-none bg-transparent border w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="test" area-label="amount" name="amount" required />
        </label>
      </div>
      <button className="appearance-none bg-transparent w-full text-gray-700 mr-3 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="submit">Add</button>
    </form>
  );
}

// block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline