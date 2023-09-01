import { FC, MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IconButton } from 'components/ui/icon-button';
import SvgCrossIconAccentL from 'components/ui/icons/cross-icon-accent-l';

import { dimensions } from './config';
import type { AnimationStatusType, IProps, ModalStatusType } from './types';

import { Close, Container, Content, Wrapper } from './styles';

const Modal: FC<IProps> = ({
    /** JSX элемент */
    children,
    /** Позволяет отображать или скрывать модальное окно */
    isShowModal,
    /** Размер компонента */
    size = 's',
    /** Функция сеттер для состояния октрытия модального окна */
    setIsShowModal,
}) => {
    const [modalStatus, setModalStatus] = useState<ModalStatusType>('close');
    const [animationStatus, setAnimationStatus] =
        useState<AnimationStatusType>('off');

    const modalWrapperId = 'modal-wrapper';

    const handleModalOutsideClose = (event: MouseEvent): void => {
        event.stopPropagation();

        const element = event.target as HTMLDivElement;

        if (element.id === modalWrapperId) {
            setIsShowModal(!isShowModal);
        }
    };

    const handleModalClose = () => {
        setIsShowModal(!isShowModal);
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
                $isShow={animationStatus === 'on'}
                id={modalWrapperId}
                onClick={handleModalOutsideClose}
            >
                <Container>
                    <Close>
                        <IconButton
                            size={size}
                            view='filled'
                            color='var(--dark)'
                            onClick={handleModalClose}
                        >
                            <SvgCrossIconAccentL
                                width={dimensions[size].width}
                                height={dimensions[size].height}
                            />
                        </IconButton>
                    </Close>
                    <Content $size={size}>{children}</Content>
                </Container>
            </Wrapper>,
            document.body,
        )
    );
};

export default Modal;
