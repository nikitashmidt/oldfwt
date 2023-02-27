import cn from 'classnames';
import './style.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	isDark: boolean;
	isOutlined?: boolean;
	isDisabled?: boolean;
	className:
		| 'button__default'
		| 'button__text'
		| 'button__trash'
		| 'button__theme'
		| 'button__circle';
	isBtnOverImage?: boolean;
}

export const Button = ({
	onClick,
	isDark,
	isOutlined,
	isDisabled,
	children,
	className,
	isBtnOverImage
}: IButtonProps) => {
	const name=()=>{
		console.log('name')
	}
	return (
		<button
			className={cn(
				'button',
				'button',
				{ [`${className}--dark`]: isDark },
				{ [`${className}--outlined`]: isOutlined },
				{ [`${className}--boi`]: isBtnOverImage },
				{ [`${className}--disabled`]: isDisabled },
				className
			)}
			disabled={isDisabled}
			onClick={onClick}>
			{children}
		</button>
	);
};
