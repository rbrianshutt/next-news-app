import Image from 'next/image';
import { categories } from '../constants';
import fetchNews from '@/lib/fetchNews';
import NewsList from './NewsList';
import response from '../response.json'

export default async function Home() {
	// fetch the news data
	const news: NewsResponse = 
	//response || 
	await fetchNews(categories.join(','));

	//console.log(news)

	return <div><NewsList news={news} /></div>;
}
