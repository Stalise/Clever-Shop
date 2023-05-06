export interface IStyledIconButton {
    isFill: boolean;
}

export interface IIconButtonProps extends IStyledIconButton {
    children: JSX.Element;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
