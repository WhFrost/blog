import clsx from 'clsx';
import styles from './ThemeSwitcher.module.scss';
import {Theme} from '../lib/ThemeContext';
import {useTheme} from '../hooks/useTheme';
import DartkThemeIcon from 'shared/assets/icons/dark-theme.svg';
import LightThemeIcon from 'shared/assets/icons/light-theme.svg';
import {Button} from 'shared/ui';
import {ButtonView} from 'shared/ui/Button/Button';

export function ThemeSwitcher() {
	const {theme, toggleTheme} = useTheme();
	return (
		<Button
			className={clsx(styles.themeSwitcher)}
			view={ButtonView.CLEAR}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? (
				<LightThemeIcon color='#CED4DA' width={20} height={20} />
			) : (
				<DartkThemeIcon color='#CED4DA' width={20} height={20} />
			)}
		</Button>
	);
}
