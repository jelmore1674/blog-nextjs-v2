import fs from 'fs';
import path from 'path';
import { Post } from '../types';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostsFiles(): string[] {
	return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string): Post {
	const postSlug = postIdentifier.replace(/\.mdx$/, '');
	const filePath = path.join(postsDirectory, `${postSlug}.mdx`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);
	const postData: Post = {
		slug: postSlug,
		title: data.title,
		excerpt: data.excerpt,
		image: data.image,
		date: data.date,
		isFeatured: data.isFeatured,
		content,
	};
	return postData;
}

export function getAllPosts(): Post[] {
	const postFiles = getPostsFiles();
	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});
	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);
	return sortedPosts;
}

export function getFeaturedPosts(): Post[] {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.filter((post) => post.isFeatured);
	return featuredPosts;
}
