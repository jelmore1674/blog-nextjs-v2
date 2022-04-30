import Head from 'next/head';

export const LayoutMDX = ({ children, meta }: any) => {
	return (
		<>
			<Head>{meta && <title>{meta.title}</title>}</Head>
			<main
				style={{
					maxWidth: '1200px',
					backgroundColor: 'green',
					height: '100vh',
					margin: '0 auto',
				}}>
				{children}
			</main>
		</>
	);
};
