import {ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

export const ButtonView = {
	CLEAR: 'clear',
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	view?: (typeof ButtonView)[keyof typeof ButtonView];
}

export function Button(props: ButtonProps) {
	const {className, children, view, ...otherProps} = props;

	return (
		<button
			className={clsx(styles.button, styles[view], className)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...otherProps}
		>
			{children}
		</button>
	);
}
