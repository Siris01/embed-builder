import type { NextPage } from 'next';
import Builder from '../components/layout';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Embed builder</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Whitney:wght@100;300;400;500;600;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-center text-red-500 text-4xl p-4 m-4 font-semibold'>Embed builder</h1>
				<Builder />
			</div>
		</>
	);
};

export default Home;
