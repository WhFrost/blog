import {useState} from 'react';
import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import {Button} from 'shared/ui';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwithcer/ui/LangSwitcher';
import {ButtonView} from 'shared/ui/Button/Button';

interface SidebarProps {
	className?: string;
}

export function Sidebar({className}: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			className={clsx(
				styles.sidebar,
				className,
				collapsed ? styles.collapsed : '',
			)}
		>
			<Button view={ButtonView.CLEAR} onClick={onToggle}>
				{!collapsed ? '<--' : '-->'}
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
}
