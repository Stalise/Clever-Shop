export type ModalStatusType = 'open' | 'close';
export type AnimationStatusType = 'on' | 'off';
export type SizeType = 's' | 'm' | 'l' | 'xl';

export interface IWrapperProps {
    $isShow: boolean;
}

export interface IContentProps {
    $size: SizeType;
}

export interface IProps {
    children: JSX.Element;
    isShowModal: boolean;
    size?: SizeType;
    setIsShowModal: (data: boolean) => void;
}

export type DimensionsType = {
    [key in SizeType]: {
        width: number;
        height: number;
        padding: string;
    };
};
