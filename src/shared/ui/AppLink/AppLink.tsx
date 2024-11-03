import {ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import styles from './AppLink.module.scss';
import clsx from 'clsx';

export const AppLinkView = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
} as const;

interface AppLinkProps extends LinkProps {
	className?: string;
	view?: (typeof AppLinkView)[keyof typeof AppLinkView];
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
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...otherProps}
		>
			{children}
		</Link>
	);
}
