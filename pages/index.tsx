import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const Builder = dynamic(() => import('../components/layout'), { ssr: false });

const Home: NextPage = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-center text-red-500 text-4xl p-4 m-4 font-semibold'>Embed builder</h1>
			<Builder />
		</div>
	);
};

export default Home;
