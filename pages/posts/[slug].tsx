import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { PostDetail } from '../../components/posts/post-detail';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import { Post } from '../../types';

interface Props {
	post: Post;
}

const SinglePostPage: NextPage<Props> = ({ post }) => {
	const imagePath = `https://blog.justinelmore.dev/images/posts/${post.slug}/${post.image}`;
	const twitterHandle = '@jelmore1674';
	const currentURL = `https://blog.justinelmore.dev/posts/${post.slug}`;
	const siteName = 'Justin Elmore Blog';
	return (
		<React.Fragment>
			<Head>
				<title>{post.title}</title>
				<meta name='description' content={post.excerpt} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:image' content={imagePath} />
				<meta
					name='twitter:creator'
					content={twitterHandle}
					key='twhandle'
				/>

				{/* Open Graph */}
				<meta property='og:url' content={currentURL} key='ogurl' />
				<meta property='og:type' content='article' />
				<meta property='og:image' content={imagePath} key='ogimage' />
				<meta
					property='og:image:secure_url'
					content={imagePath}
					key='ogimagesecureurl'
				/>
				<meta property='og:image:width' content='500' />
				<meta property='og:image:height' content='500' />
				<meta
					property='og:site_name'
					content={siteName}
					key='ogsitename'
				/>
				<meta property='og:title' content={post.title} key='ogtitle' />
				<meta
					property='og:description'
					content={post.excerpt}
					key='ogdesc'
				/>
			</Head>
			<PostDetail post={post} />
		</React.Fragment>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params!;
	const post = getPostData(slug! as string);
	return {
		props: {
			post,
		},
		revalidate: 1800,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const postFileNames = getPostsFiles();
	const slugs = postFileNames.map((fileName) =>
		fileName.replace(/\.md$/, '')
	);
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
};

export default SinglePostPage;
