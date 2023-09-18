import { FC, useState } from 'react';

import SvgHangerIconAccentL from 'components/ui/icons/hanger-icon-accent-l';
import { Modal } from 'components/ui/modal';

import sizeGuidePicture from '../../../../../../../public/static/size_guide.png';

import { Content, StyledImage, Wrapper } from './styles';

export const Hanger: FC = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleClick = () => {
        setIsShowModal(!isShowModal);
    };

    return (
        <Wrapper onClick={handleClick}>
            <SvgHangerIconAccentL color='var(--dark-grey)' />
            <span>Size guide</span>
            <Modal
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
                size='2xl'
            >
                <Content>
                    <span>Size guide</span>
                    <StyledImage src={sizeGuidePicture} alt='size guide' />
                </Content>
            </Modal>
        </Wrapper>
    );
};
