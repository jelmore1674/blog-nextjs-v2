import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
	LI,
	Logo,
	MobileIcon,
	MobileNav,
	MobileUL,
	Nav,
	NavContainer,
	NavWrapper,
	StyledLink,
	UL,
} from '../styled-components';

export const MainNavigation = (): JSX.Element => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	return (
		<NavWrapper>
			<NavContainer>
				<Link href='/' passHref>
					<StyledLink>
						<Logo>justinelmore.dev</Logo>
					</StyledLink>
				</Link>
				<MobileIcon onClick={() => setShowMobileNav(!showMobileNav)}>
					{showMobileNav ? (
						<FaTimes size={'2rem'} />
					) : (
						<FaBars size={'2rem'} />
					)}
				</MobileIcon>
				<Nav>
					<UL>
						<LI>
							<Link href='/posts' passHref>
								<StyledLink>Posts</StyledLink>
							</Link>
						</LI>
						<LI>
							<Link href='/contact' passHref>
								<StyledLink>Contact</StyledLink>
							</Link>
						</LI>
					</UL>
				</Nav>
			</NavContainer>
			<MobileNav>
				<MobileUL show={showMobileNav}>
					<Link href='/posts' passHref>
						<LI onClick={() => setShowMobileNav(!showMobileNav)}>
							<Link href='/posts' passHref>
								<StyledLink>Posts</StyledLink>
							</Link>
						</LI>
					</Link>
					<Link href='/contact' passHref>
						<LI onClick={() => setShowMobileNav(!showMobileNav)}>
							<Link href='/contact' passHref>
								<StyledLink>Contact</StyledLink>
							</Link>
						</LI>
					</Link>
				</MobileUL>
			</MobileNav>
		</NavWrapper>
	);
};
