import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/dbConnect';

export const useForm = <T>(initialState: T) => {
	const [formValues, setFormValues] = useState(initialState);
	const [requestStatus, setRequestStatus] = useState<null | string>('');
	const [requestError, setRequestError] = useState<null | string>('');

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.persist();
		setFormValues((formValues) => ({
			...formValues,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setRequestStatus('pending');
		setRequestError(null);
		try {
			const { data, error } = await supabase
				.from<any>('messages')
				.insert({
					...formValues,
				});
			if (error) {
				throw new Error('Something went wrong!');
			}
			setRequestStatus('success');
			setFormValues(initialState);
		} catch (error: any) {
			setRequestStatus('error');
			setRequestError(error.message);
		}
	};

	let notification;

	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way!',
		};
	}

	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Success!',
			message: 'Message sent successfully!',
		};
	}

	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title: 'Error!',
			message: requestError,
		};
	}

	return {
		handleChange,
		handleSubmit,
		notification,
		formValues,
	};
};
