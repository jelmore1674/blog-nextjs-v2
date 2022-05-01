import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const PostsWrapper = tw.section`
	max-w-screen-2xl
	mx-auto
	w-[calc(100% - 4rem)]
`;

export const NavWrapper = tw.header`
	items-center
	bg-primary
	border-b-4
	border-gray-500
	flex
	flex-wrap
	h-20
	justify-center
	py-4
	sticky
	top-0
	w-full
	z-index[1]
	dark:border-white
	`;

export const NavContainer = tw.div`
	flex
	items-center
	justify-between
	px-4		
	width[calc(100% - 1rem)]
	sm:container
	sm:justify-between
`;

export const Logo = tw.div`
	font-bold
	lowercase
	text-3xl
	text-white
	tracking-wider
	width[50%]
	hover:text-gray-300
`;

export const MobileIcon = tw.div`
	cursor-pointer
	flex
	items-center
	justify-end
	text-white
	width[50%]
	sm:hidden
	`;

export const StyledLink = tw.a`
	duration-300
	ease-in-out
	text-xl
	text-white
	transition-colors
	hover:text-gray-300
`;

export const Nav = tw.nav`
	bg-primary	
	mt-6
	sm:flex
	sm:bg-none
	sm:mt-0
`;

export const UL = tw.ul`
	align-baseline
	flex-col
	hidden
	list-none
	m-0
	p-0	
	sm:flex
	sm:flex-row
	sm:gap-16
`;

export const LI = tw.li`	
	p-8
	sm:p-0
`;

export const MobileNav = styled(Nav)`
	${tw`
    bg-primary
	min-width[100vw]
	sm:hidden`}
`;

interface MobileULProps {
	show: boolean;
}

export const MobileUL = styled(UL)<MobileULProps>((p) => {
	const { show } = p;
	return css`
		${show ? tw`flex` : tw`hidden`}
	`;
});

export const ScrollToTop = tw.div`
	animate-slide-in
	bg-primary
	bottom-4
	cursor-pointer
	duration-300
	ease-in-out
	fixed
	flex
	h-11
	items-center
	justify-center
	right-8
	rounded-full
	text-white
	transition-all
	w-11
	hover:h-12
	hover:text-gray-300
	hover:w-12
	`;

export const HeroWrapper = tw.section`
	flex
	flex-col
	items-center
	justify-between
	m-auto
	my-16
	text-center
	w-full
	sm:container
	lg:flex-row
	lg:items-start
`;

export const ImageContainer = tw.div`
	bg-gray-700	
	h-72
	overflow-hidden
	rounded-full
	shadow-2xl
	w-72
`;

export const HeroText = tw.div`
	flex
	flex-col
	justify-center
	text-center
	`;

export const H1 = tw.h1`
	font-bold
	my-4
	text-4xl
	text-primary
	dark:text-primary-light
	sm:text-5xl
`;

export const HeroH1 = styled(H1)`
	${tw`
	my-12
	text-black
	text-4xl
	text-center
	dark:text-white
	md:text-6xl`}
`;

export const PostH1 = styled(H1)`
	${tw`
	text-2xl
	scroll-margin-top[80px]
	text-center
	sm:text-3xl
	md:text-4xl
	md:text-left
`}
`;

export const ContactH1 = tw(H1)`
	text-center
	text-current
	`;

export const PostH2 = tw.h2`
	font-bold
	mb-4
	mt-10
	scroll-margin-top[5.5rem]
	text-primary
	text-2xl
	text-center
	dark:text-primary-light
	md:text-3xl
	md:text-left
`;

export const HeadingH2 = tw.h2`
	my-12
	text-4xl
	text-center
	md:text-6xl
`;

export const PostH3 = tw.h3`
	font-bold
	mb-4
	mt-10
	scroll-margin-top[5.5rem]
	text-primary
	text-2xl
	text-center
	dark:text-primary-light
	md:text-3xl
	md:text-left
`;

export const P = tw.p`
	max-w-lg
	m-auto
	text-xl
	w-full
`;

export const PostP = styled(P)`
	${tw`
	max-w-full
	my-6
	text-base
	`}
`;

export const CardP = tw.p`
my-2`;

export const PostWrapper = tw.div`	
	mx-auto
	my-8
	p-4	
	dark:text-white
	lg:container	
`;

export const PostHeader = tw.header`
	border-b-4
	border-primary
	flex
	flex-col-reverse
	gap-8
	items-center 
	justify-between
	mx-0
	pb-8
	dark:border-primary-light
	md:my-8
`;

export const FeaturedImage = tw.div`
	h-full
	overflow-hidden
	rounded-2xl
	shadow-2xl
	w-full
`;

export const BlogImage = tw.div`
	border-t-primary
	h-full
	overflow-hidden
	rounded
	shadow-2xl
	w-full
`;

export const CardImage = tw.div`
	max-h-80
	overflow-hidden
	w-full
`;

export const Code = tw.code`
	bg-gray-600
	border-b
	p-0.5
	text-gray-100
	dark:bg-gray-400
`;

export const A = tw.a`
	cursor-pointer
	ease-in-out
	text-primary
	dark:text-primary-light	
	hover:text-gray-700
	hover:dark:text-gray-100
`;

export const PostCardA = styled(A)`
	${tw`
	hover:text-primary-dark	
	`}
`;

export const PostCard = styled.li`
	${tw`
	bg-gray-100
	cursor-pointer
	ease-in-out duration-150
	h-full
	overflow-hidden
	rounded-xl
	shadow-2xl
	text-center
	w-full
	hover:bg-gray-200
	dark:bg-gray-800
	dark:hover:bg-gray-700
	`}
	&:hover {
		transform: scale(1.005);
		a {
			${tw`text-gray-500 dark:text-white transition-all ease-in-out duration-100`}
		}
		img {
			${tw`opacity-80`}
		}
	}
`;

export const Time = tw.time`
	italic
	text-gray-400
	dark:text-gray-300
`;

export const CardContent = tw.div`
	mb-0
	p-2
	pb-0
`;

export const CardTitle = tw.h3`
	my-2
	text-2xl
`;

export const CardFooter = tw.footer`
	mt-0	
	p-3
	pt-0
	text-center
`;

export const PostGrid = tw.ul`
	content-center
	gap-6
	grid
	grid-template-columns[repeat(auto-fill, minmax(20rem, 1fr))]
	list-none
	m-0
	mb-8
	p-0
`;

export const ContactSection = tw.section`
	bg-gray-200
	min-height[calc(100vh - 80px)]
	mx-auto
	p-8
	rounded-lg
	shadow-lg
	text-base
	w-full
	dark:bg-gray-700
	sm:container
	sm:min-h-full
	sm:my-8
`;

export const ContactFormContainer = tw.form`
	container
	`;

export const ContactFormControls = tw.div`
	flex
	flex-col
	sm:flex-row
	sm:flex-wrap
	sm:gap-4
	`;

export const ContactFormControl = tw.div`
	flex-1
	min-width[10rem]
	my-4
`;

export const ContactFormLabel = tw.label`
	block
	font-bold
	mb-2
	text-lg
	tracking-wider
`;

export const ContactFormInput = tw.input`
	focus-visible:outline-color[blue]
	p-4
	resize-none
	rounded
	text-black
	w-full
	dark:bg-gray-200
	`;

export const ContactFormTextArea = tw.textarea`
	focus-visible:outline-color[blue]
	p-4
	resize-none
	rounded
	text-black
	w-full
	dark:bg-gray-200
	`;

export const ContactActions = tw.div`
	mt-4
	text-right
	sm:flex
	sm:justify-end
	`;

export const ContactButton = tw.button`
	bg-primary
	cursor-pointer
	duration-300
	ease-in-out
	px-8
	py-3
	rounded-lg
	shadow-lg
	text-lg
	text-white
	tracking-wide
	transition-colors
	w-full
	sm:width[25%]
	hover:text-primary
	hover:bg-white
	`;

export const NotificationContainer = styled.div<any>((p) => {
	const { status } = p;
	const color =
		status === 'success'
			? tw`bg-green-600`
			: status === 'error'
			? tw`bg-red-600`
			: tw`bg-yellow-600`;
	return [
		color,
		tw` 
        bottom-0 
        fixed 
        flex 
        h-20 
        items-center 
        justify-between 
        left[calc(50% - 15rem)]
        m-auto
        px-8 
        rounded-t-xl
        shadow-xl 
        text-white
        width[30rem]
        sm:left-0 
        sm:rounded-t-none
        sm:w-full 
        `,
	];
});

export const NotificationH2 = tw.h2`
    m-0
    text-xl
`;

export const NotificationContent = tw.p`
    text-xl
`;
