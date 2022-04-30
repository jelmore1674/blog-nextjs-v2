import { NextPage } from 'next';
import Head from 'next/head';
import { ContactForm } from '../components/contact';

const ContactPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Justin Elmore Blog</title>
				<meta
					name='description'
					content='I am a web developer, looking to spread my experiences on my coding journey.'
				/>
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
