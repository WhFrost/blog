import i18next from 'i18next';
import {useState} from 'react';
import clsx from 'clsx';
import styles from './LangSwitcher.module.scss';
import RuFlag from 'shared/assets/icons/russia.svg';
import UsFlag from 'shared/assets/icons/us.svg';
import {Button} from 'shared/ui';

interface LangSwitcherProps {
	className?: string;
}

export function LangSwitcher({className}: LangSwitcherProps) {
	const [lang, setLang] = useState(i18next.language);

	const toggleLang = () => {
		i18next.changeLanguage(i18next.language === 'ru' ? 'en' : 'ru');
		setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
	};

	return (
		<Button
			className={clsx(styles.langSwitcher, className)}
			onClick={toggleLang}
		>
			{lang === 'ru' ? (
				<RuFlag width={20} height={20} />
			) : (
				<UsFlag width={20} height={20} />
			)}
		</Button>
	);
}
