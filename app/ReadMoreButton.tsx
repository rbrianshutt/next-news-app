'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
	article: Article;
};

function ReadMoreButton({ article }: Props) {
	const router = useRouter();

	const handleClick = () => {
		const queryString = Object.entries(article)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");
		const url = `/article?${queryString}`;
		console.log(url);
		router.push(url);
	};
	return (
		<button
			onClick={handleClick}
			className='bg-green-500 h-10 rounded-b-lg dark:text-gray-900 hover:bg-green-600'
		>
			Read More
		</button>
	);
}

export default ReadMoreButton;
