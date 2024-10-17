import {useTranslation} from 'react-i18next';

function UserPage() {
	const {t} = useTranslation('userPage');

	return (
		<>
			<div>{t('Пользователь')}</div>
		</>
	);
}

export default UserPage;
