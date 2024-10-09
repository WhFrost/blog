import {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function Button({text}: ButtonProps) {
	return <button>{text}</button>;
}
