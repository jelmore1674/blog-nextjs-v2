export interface Post {
	title: string;
	image: string;
	slug: string;
	date: string;
	excerpt: string;
	content: string;
	isFeatured: boolean;
}

export interface FormData {
	email: string;
	message: string;
	name: string;
}
