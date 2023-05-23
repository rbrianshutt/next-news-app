import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
	category?: Category | string,
	keywords?: string,
	isDynamic?: boolean
) => {
	// Graph QL query
	const query = gql`
		query MyQuery($access_key: String!, $categories: String!, $keywords: String) {
			myQuery(
				access_key: $access_key
				categories: $categories
				countries: "us"
				sort: "published_desc"
				keywords: $keywords
			) {
				data {
					author
					category
					country
					description
					image
					language
					source
					published_at
					title
					url
				}
				pagination {
					count
					limit
					offset
					total
				}
			}
		}
	`;

	//Fetch function with Next 13 caching
	const res = await fetch(
		'https://hemhofen.stepzen.net/api/named-nightingale/__graphql',
		{
			method: 'POST',
			cache: isDynamic ? 'no-cache' : 'default',
			next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
			},
			body: JSON.stringify({
				query,
				variables: {
					access_key: process.env.MEDIASTACK_API_KEY,
					categories: category,
					keywords: keywords,
				},
			}),
		}
	);
	console.log('LOADING NEW DATA FROM API for category >>>', category, keywords);

	const newsResponse = await res.json();
	//Sort function by images vs not images present
	const news = sortNewsByImage(newsResponse.data.myQuery);
	//return res
	return news;
};

export default fetchNews;
// stepzen import curl ( in terminal )
//  "http://api.mediastack.com/v1/news?access_key=5c700b6269c61dce3f902bd9699d6969&countries=us"