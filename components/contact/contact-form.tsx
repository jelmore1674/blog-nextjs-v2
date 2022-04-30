import { FormData } from '../../types';
import { useForm } from '../../hooks/useForm';
import {
	ContactActions,
	ContactButton,
	ContactFormContainer,
	ContactFormControl,
	ContactFormControls,
	ContactFormInput,
	ContactFormLabel,
	ContactFormTextArea,
	ContactH1,
	ContactSection,
} from '../styled-components';
import { Notification } from '../ui';

const initialFormData: FormData = {
	email: '',
	message: '',
	name: '',
};

export const ContactForm = (): JSX.Element => {
	const { formValues, handleChange, handleSubmit, notification } =
		useForm<FormData>(initialFormData);

	return (
		<>
			<ContactSection>
				<ContactH1>How Can I Help You?</ContactH1>
				<ContactFormContainer onSubmit={handleSubmit}>
					<ContactFormControls>
						<ContactFormControl>
							<ContactFormLabel htmlFor='email'>
								Your Email
							</ContactFormLabel>
							<ContactFormInput
								id='email'
								name='email'
								onChange={handleChange}
								required
								type='email'
								value={formValues.email}
							/>
						</ContactFormControl>
						<ContactFormControl>
							<ContactFormLabel htmlFor='name'>
								Your Name
							</ContactFormLabel>
							<ContactFormInput
								id='name'
								name='name'
								onChange={handleChange}
								required
								type='text'
								value={formValues.name}
							/>
						</ContactFormControl>
					</ContactFormControls>
					<ContactFormControl>
						<ContactFormLabel htmlFor='message'>
							Your Message
						</ContactFormLabel>
						<ContactFormTextArea
							id='message'
							name='message'
							onChange={handleChange}
							required
							rows={7}
							value={formValues.message}
						/>
					</ContactFormControl>
					<ContactActions>
						<ContactButton type='submit'>Send</ContactButton>
					</ContactActions>
				</ContactFormContainer>
			</ContactSection>
			{notification && <Notification {...notification} />}
		</>
	);
};
