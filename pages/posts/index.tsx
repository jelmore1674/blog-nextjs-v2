import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { AllPosts } from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { Post } from '../../types';

interface Props {
	posts: Post[];
}

const AllPostsPage: NextPage<Props> = ({ posts }) => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name='description'
					content='A list of all programming related posts'
				/>
			</Head>
			<AllPosts posts={posts} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts();
	return {
		props: {
			posts,
		},
		revalidate: 1800,
	};
};

export default AllPostsPage;
