import { Modal, Button, Textarea } from '@mantine/core';
import useLocalStorage from 'use-local-storage-state';
import { useState } from 'react';
import renderMD from '../utils/renderMarkdown';

const Content = () => {
	const [value, setValue] = useLocalStorage('content', {
		defaultValue: ''
	});
	const [opened, setOpened] = useState(false);
	const [content, setContent] = useState(value);

	return (
		<>
			<Modal
				centered
				overflow='inside'
				overlayOpacity={0.55}
				overlayBlur={24}
				color='#ffffff'
				opened={opened}
				onClose={() => {
					setOpened(false);
					setContent(value);
				}}
				title='Content'
				children={
					<>
						<Textarea
							autosize
							placeholder='Enter content here'
							value={content}
							data-autofocus
							onChange={(e) => setContent(e.target.value)}
							error={
								content.length > 2000 ? `Content exceeds maximum limit by ${content.length - 2000} characters` : false
							}
						/>
						<Button
							color={'indigo'}
							fullWidth
							disabled={content.length > 2000}
							onClick={() => {
								setOpened(false);
								setValue(content);
							}}
							mt={'md'}
						>
							Submit
						</Button>
					</>
				}
			/>
			<div
				onClick={() => setOpened(true)}
				className={`break-all whitespace-pre-line mb-4 ${value ? 'text-white' : 'text-[#C7C7CD]'}`}
				id='con-input'
			>
				{value.length ? renderMD(value) : 'Enter content here'}
			</div>
		</>
	);
};

export default Content;
