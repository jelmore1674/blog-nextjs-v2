import ReactDOM from 'react-dom';
import {
	NotificationContainer,
	NotificationContent,
	NotificationH2,
} from '../styled-components';

interface NotificationProps {
	message: string | null;
	status: string;
	title: string;
}

export const Notification = ({ title, message, status }: NotificationProps) => {
	return ReactDOM.createPortal(
		<NotificationContainer status={status}>
			<NotificationH2>{title}</NotificationH2>
			<NotificationContent>{message}</NotificationContent>
		</NotificationContainer>,
		document.getElementById('notifications')!
	);
};
