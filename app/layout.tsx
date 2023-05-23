import './globals.css';
import { Inter } from 'next/font/google';
import Header from './Header';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'News App',
	description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
				<Providers>
					<Header />
				</Providers>
				<div className='max-w-6xl mx-auto'>{children}</div>
			</body>
		</html>
	);
}
