import {ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import styles from './AppLink.module.scss';
import clsx from 'clsx';

export enum AppLinkView {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	view?: AppLinkView;
	children?: ReactNode;
}

export function AppLink(props: AppLinkProps) {
	const {
		to,
		className,
		view = AppLinkView.PRIMARY,
		children,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={clsx(styles.appLink, styles[view], className)}
			{...otherProps}
		>
			{children}
		</Link>
	);
}
