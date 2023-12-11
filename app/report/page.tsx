import getPrice from '../../lib/getPrice'

export default async function Report() {
	const data = await getPrice('ETH');

	return (
		<div>
			<h1>ETH</h1>
			<div>{JSON.stringify(data)}</div>
		</div>
	);
}


