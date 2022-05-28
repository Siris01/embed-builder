import Content from './content';
import Embed from './embed';

const Builder = () => {
	return (
		<div className='flex flex-col w-1/2'>
			<Content />
			<Embed />
		</div>
	);
};

export default Builder;
