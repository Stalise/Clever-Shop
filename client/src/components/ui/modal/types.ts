import { SvgSisezType } from 'types/ui';

export type ModalStatusType = 'open' | 'close';
export type AnimationStatusType = 'on' | 'off';

export interface IWrapperProps {
    $isShow: boolean;
}

export interface IContentProps {
    $size: SvgSisezType;
}

export interface IProps {
    children: JSX.Element;
    isShowModal: boolean;
    size?: SvgSisezType;
    setIsShowModal: (data: boolean) => void;
}

export type DimensionsType = {
    [key in SvgSisezType]: {
        width: number;
        height: number;
        padding: string;
    };
};
