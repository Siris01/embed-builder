import Content from './content';
import Embed from './embed';
import Image from 'next/image';

const Builder = () => {
	const date = () => {
		const d = new Date(Date.now());
		return `Today at ${d.getHours()}:${d.getMinutes()}`;
	};

	return (
		<div className='flex flex-col shadow-lg shadow-black p-4 mb-16 rounded-lg'>
			<div className='flex flex-row justify-start m-2'>
				<div>
					<Image
						className='rounded-full p-2'
						height={72}
						width={72}
						alt='user-avatar'
						src='https://cdn.discordapp.com/embed/avatars/0.png'
					/>
				</div>
				<div className='flex flex-col p-2'>
					<div className='flex flex-row'>
						<span className='text-white text-2xl'>User</span>
						<span className='text-[#C7C7CD] text-sm p-2'>{date()}</span>
					</div>
					<Content />
					<Embed />
				</div>
			</div>
		</div>
	);
};

export default Builder;
