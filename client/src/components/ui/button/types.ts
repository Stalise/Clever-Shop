type ButtonThemeType = 'light' | 'dark';

type SizesType = 's' | 'm' | 'l';

export interface IStyledButton {
    block?: boolean;
    buttonTheme?: ButtonThemeType;
    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    size?: SizesType;
    outline?: boolean;
}

export interface IButtonProps extends IStyledButton {
    text: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
