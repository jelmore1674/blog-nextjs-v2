import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ContactForm } from '../components/contact';

const ContactPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Justin Elmore Blog</title>
				<meta
					name='description'
					content='I am a web developer, looking to spread my experiences on my coding journey.'
				/>
			</Head>
			<ContactForm />
		</React.Fragment>
	);
};

export default ContactPage;
