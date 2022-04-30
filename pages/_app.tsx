import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Layout } from '../components/layout';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
	}, []);
	if (!showChild) {
		return null;
	}
	if (typeof window === 'undefined') {
		return <></>;
	} else {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Layout>
					<Head>
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1.0'
						/>
						<link rel='icon' href='/favicon.png' />
					</Head>
					<Component {...pageProps} />
				</Layout>
			</React.Fragment>
		);
	}
}

export default MyApp;
