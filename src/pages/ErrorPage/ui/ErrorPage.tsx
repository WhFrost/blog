import {useTranslation} from 'react-i18next';

function ErrorPage() {
	const {t} = useTranslation('errorPage');

	return <div>404 {t('Страница не найдена')}</div>;
}

export default ErrorPage;
