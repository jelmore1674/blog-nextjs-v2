import { Post } from '../../../types';
import { PostGrid } from '../../styled-components';
import { PostItem } from '../post-item';

interface Props {
	posts: Post[];
}

export const PostsGrid = ({ posts }: Props): JSX.Element => {
	return (
		<PostGrid>
			{posts.map((post) => (
				<PostItem key={post.slug} {...post} />
			))}
		</PostGrid>
	);
};
