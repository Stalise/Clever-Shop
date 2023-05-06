type ButtonThemeType = 'light' | 'dark';

export interface IStyledButton {
    block?: boolean;
    buttonTheme?: ButtonThemeType;
    fontSize?: string;
    fontWeight?: number;
    lineHeight?: string;
    padding?: string;
    outline?: boolean;
    width?: number;
}

export interface IButtonProps extends IStyledButton {
    text: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
