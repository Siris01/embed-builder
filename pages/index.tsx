import type { NextPage } from 'next';
import Builder from '../components/layout';
import Head from 'next/head';
import Logo from '../components/logo';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Embed builder</title>
				<meta property='og:title' content='Invicord' />
				<meta property='og:description' content='A dynamic embed builder for discord!' />
				<meta property='theme-color' content='#2F3136' />
				<meta name='theme-color' content='#2F3136' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='A dynamic embed builder for discord!' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Cabin:wght@100;300;400;500;600;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='flex flex-col justify-center items-center'>
				<div className='flex flex-row w-screen justify-center align-text-bottom'>
					<h1 className='text-center text-red-500 text-4xl p-4 m-4 font-semibold'>Embed builder</h1>
				</div>
				<Builder />
			</div>
		</>
	);
};

export default Home;
