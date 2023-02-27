import React, { FC, DOMAttributes } from 'react';
import cn from 'classnames';
import { newGuid } from '../../utils/guid';
import { ReactComponent as Arrow } from './resources/arrow.svg';
import { ReactComponent as ArrowDown } from './resources/arrow-down.svg';
import { ReactComponent as LightTheme } from './resources/light-theme.svg';
import { ReactComponent as BackButton } from './resources/back-button.svg';
import { ReactComponent as DarkTheme } from './resources/dark-theme.svg';
import { ReactComponent as Facebook } from './resources/facebook.svg';
import { ReactComponent as ReadMore } from './resources/readmore.svg';
import { ReactComponent as Inst } from './resources/inst.svg';
import { ReactComponent as Vk } from './resources/vk.svg';
import { ReactComponent as Hamburger } from './resources/hamburger.svg';
import { ReactComponent as CloseBtn } from './resources/close-btn.svg';
import { ReactComponent as Logo } from './resources/logo.svg';
import './style.scss';

export type IconType =
	| 'Arrow'
	| 'ArrowDown'
	| 'LightTheme'
	| 'BackButton'
	| 'DarkTheme'
	| 'Facebook'
	| 'ReadMore'
	| 'Inst'
	| 'Vk'
	| 'Hamburger'
	| 'CloseBtn'
	| 'Logo';

const iconTypes = new Map([
	['Arrow', <Arrow key={newGuid()} />],
	['ArrowDown', <ArrowDown key={newGuid()} />],
	['LightTheme', <LightTheme key={newGuid()} />],
	['BackButton', <BackButton key={newGuid()} />],
	['DarkTheme', <DarkTheme key={newGuid()} />],
	['Facebook', <Facebook key={newGuid()} />],
	['ReadMore', <ReadMore key={newGuid()} />],
	['Inst', <Inst key={newGuid()} />],
	['Vk', <Vk key={newGuid()} />],
	['Hamburger', <Hamburger key={newGuid()} />],
	['CloseBtn', <CloseBtn key={newGuid()} />],
	['Logo', <Logo key={newGuid()} />],
]);

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
	className?: string;
	type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
	iconTypes.get(type) as JSX.Element;

export const Icon: FC<IIconProps> = ({ className, type, ...props }) => {
	return (
		<div
			className={cn('Icon', className)}
			{...props}>
			{getIcon(type)}
		</div>
	);
};
