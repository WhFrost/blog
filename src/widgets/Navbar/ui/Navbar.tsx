import clsx from 'clsx';
import {useTranslation} from 'react-i18next';
import {AppRoutes, AppRoutesPaths} from 'shared/configs/routes';
import {AppLink} from 'shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: 'string';
}

export function Navbar({className}: NavbarProps) {
	const {t} = useTranslation();

	return (
		<div className={clsx(styles.navbar, className)}>
			<div className={styles.links}>
				<AppLink to={AppRoutesPaths[AppRoutes.MAIN]}>{t('Главная')}</AppLink>
				<AppLink to={AppRoutesPaths[AppRoutes.USER]}>
					{t('Пользователь')}
				</AppLink>
			</div>
		</div>
	);
}
