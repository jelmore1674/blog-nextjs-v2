import Image from 'next/image';
import Link from 'next/link';
import {
	CardContent,
	CardFooter,
	CardImage,
	CardP,
	CardTitle,
	PostCard,
	PostCardA,
	Time,
} from '../../styled-components';

interface PostItemProps {
	date: string;
	excerpt: string;
	image: string;
	slug: string;
	title: string;
}

export const PostItem = ({
	date,
	excerpt,
	image,
	slug,
	title,
}: PostItemProps): JSX.Element => {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const shortenedExcerpt =
		excerpt.length > 100 ? excerpt.substring(0, 100) + '...' : excerpt;
	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;
	return (
		<Link href={linkPath}>
			<PostCard>
				<CardImage>
					<Image
						src={imagePath}
						alt={title}
						width={500}
						height={300}
						layout='responsive'
					/>
				</CardImage>
				<CardContent>
					<CardTitle>{title}</CardTitle>
					<Time>{formattedDate}</Time>
					<CardP>{shortenedExcerpt}</CardP>
				</CardContent>
				<CardFooter>
					<PostCardA>Continue Reading</PostCardA>
				</CardFooter>
			</PostCard>
		</Link>
	);
};
