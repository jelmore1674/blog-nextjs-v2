import { Post } from '../../../types';
import { HeroH1, PostsWrapper } from '../../styled-components';
import { PostsGrid } from '../posts-grid';

interface Props {
	posts: Post[];
}

export const AllPosts = ({ posts }: Props): JSX.Element => {
	return (
		<PostsWrapper>
			<HeroH1>All Posts</HeroH1>
			<PostsGrid posts={posts} />
		</PostsWrapper>
	);
};
