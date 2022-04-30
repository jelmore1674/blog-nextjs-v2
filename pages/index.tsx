import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { FeaturedPosts } from '../components/featured-posts';
import { Hero } from '../components/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import { Post } from '../types';

interface HomeProps {
	posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
	return (
		<React.Fragment>
			<Head>
				<meta
					httpEquiv='Content-Type'
					content='text/html; charset=UTF-8'
				/>
				<title>Justin Elmore Blog </title>
				<meta
					name='description'
					content='I am a web developer, looking to spread my experiences on my coding journey.'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</React.Fragment>
	);
};

export const getStaticProps: GetStaticProps = () => {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 1800,
	};
};

export default Home;
