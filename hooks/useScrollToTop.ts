import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
	const [value, setValue] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 700) {
				setValue(true);
			} else {
				setValue(false);
			}
		});
	}, []);
	return value;
};
