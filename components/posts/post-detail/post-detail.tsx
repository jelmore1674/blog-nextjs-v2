import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Post } from '../../../types';
import {
	A,
	BlogImage,
	Code,
	FeaturedImage,
	PostH1,
	PostH2,
	PostH3,
	PostHeader,
	PostP,
	PostWrapper,
} from '../../styled-components';

interface Props {
	post: Post;
}

export const PostDetail = ({ post }: Props): JSX.Element => {
	const { title, image, slug, content } = post;

	const imagePath = `/images/posts/${slug}/${image}`;

	const customRenderers = {
		// img(image: any) {
		// 	return (
		// 		<Image
		// 			src={`/images/posts/${slug}/${image.src}`}
		// 			alt={image.alt}
		// 			width={600}
		// 			height={300}
		// 		/>
		// 	);
		// },
		p(paragraph: any) {
			const { node } = paragraph;
			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (
					<Link
						href={`/images/posts/${slug}/${image.properties.src}`}
						passHref>
						<BlogImage>
							<Image
								src={`/images/posts/${slug}/${image.properties.src}`}
								alt={image.properties.alt}
								width={960}
								height={540}
								layout='responsive'
							/>
						</BlogImage>
					</Link>
				);
			}
			return <PostP>{paragraph.children}</PostP>;
		},
		code(code: any) {
			const { className, children } = code;
			const language =
				className != undefined ? className.split('-')[1] : 'code';
			if (language === 'code') {
				return <Code>{children}</Code>;
			} else {
				return (
					<SyntaxHighlighter style={materialDark} language={language}>
						{children}
					</SyntaxHighlighter>
				);
			}
		},
		a(anchor: any) {
			const { href, children } = anchor;
			return <A href={href}>{children}</A>;
		},
		h2(heading: any) {
			const { children } = heading;
			const href = children[0].toLowerCase();
			return (
				<PostH2 id={`${href.replace(/ /g, '-')}`}>{children}</PostH2>
			);
		},
		h3(heading: any) {
			const { children } = heading;
			const href = children[0].toLowerCase();
			return (
				<PostH3 id={`${href.replace(/ /g, '-')}`}>{children}</PostH3>
			);
		},
	};
	return (
		<PostWrapper>
			<PostHeader>
				<PostH1>{title}</PostH1>
				<FeaturedImage>
					<Image
						src={imagePath}
						alt={title}
						width={960}
						height={540}
						layout='responsive'
						priority
					/>
				</FeaturedImage>
			</PostHeader>
			<ReactMarkdown components={customRenderers}>
				{content}
			</ReactMarkdown>
		</PostWrapper>
	);
};
