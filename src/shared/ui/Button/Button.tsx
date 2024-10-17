import {ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

export enum ButtonView {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	view?: ButtonView;
}

export function Button(props: ButtonProps) {
	const {className, children, view, ...otherProps} = props;

	return (
		<button
			className={clsx(styles.button, styles[view], className)}
			{...otherProps}
		>
			{children}
		</button>
	);
}
