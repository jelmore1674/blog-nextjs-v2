import { Post } from '../../types';
import { PostsGrid } from '../posts/posts-grid';
import { HeadingH2, PostsWrapper } from '../styled-components';

interface FeaturedProps {
	posts: Post[];
}

export const FeaturedPosts = ({ posts }: FeaturedProps): JSX.Element => {
	return (
		<PostsWrapper>
			<HeadingH2>Featured Posts</HeadingH2>
			<PostsGrid posts={posts} />
		</PostsWrapper>
	);
};
