import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider emotionOptions={{ key: 'mantine', prepend: false }} withGlobalStyles withNormalizeCSS>
			<Head>
				<title>Embed builder</title>
				<meta property='og:title' content='Invicord' />
				<meta property='og:description' content='A dynamic embed builder for discord!' />
				<meta property='theme-color' content='#2F3136' />
				<meta name='theme-color' content='#2F3136' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='A dynamic embed builder for discord!' />
			</Head>
			<Component {...pageProps} />
		</MantineProvider>
	);
}

export default MyApp;
