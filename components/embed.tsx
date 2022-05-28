import superjson from 'superjson';
import { useLocalStorage } from '@mantine/hooks';

function Edit() {
	const [value, setValue] = useLocalStorage({
		key: 'embed',
		defaultValue: null,
		serialize: superjson.stringify,
		deserialize: (str) => (str === undefined ? null : superjson.parse(str))
	});
}

const Embed = () => {
	return <div className='text-white bg-[#2f3136]'>Embed...</div>;
};

export default Embed;
