import {useTranslation} from 'react-i18next';

function MainPage() {
	const {t} = useTranslation('MainPage');

	return <div>{t('Главная страница')}</div>;
}

export default MainPage;
