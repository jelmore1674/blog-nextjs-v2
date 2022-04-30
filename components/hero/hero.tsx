import Image from 'next/image';
import {
	H1,
	HeroText,
	HeroWrapper,
	ImageContainer,
	P,
} from '../styled-components';

export const Hero: React.FC = () => {
	return (
		<HeroWrapper>
			<ImageContainer>
				<Image
					src='/images/site/profile.jpg'
					alt='profile'
					width={300}
					height={300}
					layout='responsive'
				/>
			</ImageContainer>
			<HeroText>
				<H1>Welcome to Justin Elmore's Blog</H1>
				<P>
					Hi! I'm Justin! I'm a web developer and as I learn new
					things I would like to share them with you. I hope you
					enjoy!
				</P>
			</HeroText>
		</HeroWrapper>
	);
};
