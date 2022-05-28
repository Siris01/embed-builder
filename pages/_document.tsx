import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Cabin:wght@100;300;400;500;600;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='bg-[#202020] font-[Cabin,sans-serif]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
