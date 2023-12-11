export default async function Report() {
	const data = await getPrice('ETH');

	return (
		<div>
			<h1>ETH</h1>
			<div>{JSON.stringify(data)}</div>
		</div>
	);
}

export async function getPrice(symbol: string): Promise<string> {
	const url = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest';
	const fetchOptions = {
		headers: {
			'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY || ''
		}
	};

	const response = await fetch(`${url}?symbol=${symbol}`, fetchOptions)
	const data = await response.json();

	console.log(data);

	return data;
}
