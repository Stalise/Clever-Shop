import { FC, MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { AnimationStatusType, ModalStatusType } from './types';

import { Wrapper } from './styles';

interface IProps {
    children: JSX.Element;
    isShowModal: boolean;
    setIsShowModal: (data: boolean) => void;
}

const Modal: FC<IProps> = ({ children, isShowModal, setIsShowModal }) => {
    const [modalStatus, setModalStatus] = useState<ModalStatusType>('close');
    const [animationStatus, setAnimationStatus] =
        useState<AnimationStatusType>('off');

    const modalContainerId = 'modal-container';

    const handleModalClose = (event: MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();

        const element = event.target as HTMLDivElement;

        if (element.id === modalContainerId) {
            setIsShowModal(!isShowModal);
        }
    };

    useEffect(() => {
        if (isShowModal) {
            document.body.style.overflow = 'hidden';
            setModalStatus('open');

            setTimeout(() => {
                setAnimationStatus('on');
            }, 10);
        } else {
            document.body.style.overflow = 'visible';
            setAnimationStatus('off');

            setTimeout(() => {
                setModalStatus('close');
            }, 300);
        }
    }, [isShowModal]);

    return (
        modalStatus === 'open' &&
        createPortal(
            <Wrapper
                isShow={animationStatus === 'on'}
                id={modalContainerId}
                onClick={handleModalClose}
            >
                {children}
            </Wrapper>,
            document.body,
        )
    );
};

export default Modal;
