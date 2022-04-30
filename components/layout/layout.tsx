import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ScrollToTop } from '../styled-components';
import { MainNavigation } from './main-navigation';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	const showScroll = useScrollToTop();
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
			{showScroll && (
				<ScrollToTop onClick={() => window.scrollTo(0, 0)}>
					<FaChevronUp size={'1.5em'} />
				</ScrollToTop>
			)}
		</>
	);
};
