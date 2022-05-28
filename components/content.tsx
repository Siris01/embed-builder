import superjson from 'superjson';
import { useLocalStorage } from '@mantine/hooks';

function edit() {
	const [value, setValue] = useLocalStorage({
		key: 'content',
		defaultValue: null,
		serialize: superjson.stringify,
		deserialize: (str) => (str === undefined ? null : superjson.parse(str))
	});
}

const Content = () => {
	return <div className='text-white'>Type your text here</div>;
};

export default Content;
