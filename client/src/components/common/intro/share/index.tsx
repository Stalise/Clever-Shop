import { FC, useState } from 'react';
import dynamic from 'next/dynamic';

import SvgShareIconFilledM from 'components/ui/icons/share-icon-filled-m';

import { generateLinks } from './utils/generate-links';
import { IShareLink } from './types';

import { Content, StyledLink, Wrapper } from './styles';

const Modal = dynamic(() => import('../../../../components/ui/modal'), {
    ssr: false,
});

export const Share: FC = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    let shareLinks: IShareLink[] = [];

    const handleClick = () => {
        setIsShowModal(!isShowModal);
    };

    if (typeof window !== 'undefined') {
        shareLinks = generateLinks(document.URL);
    }

    return (
        <Wrapper onClick={handleClick}>
            <SvgShareIconFilledM color='var(--dark-grey)' />
            <span>share</span>
            <Modal
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
                size='l'
            >
                <Content>
                    <ul>
                        {shareLinks.map(({ text, link }) => (
                            <li key={text}>
                                <StyledLink
                                    href={link}
                                    target='_blank'
                                    rel='noopener noreferrer nofollow'
                                >
                                    {text}
                                </StyledLink>
                            </li>
                        ))}
                    </ul>
                </Content>
            </Modal>
        </Wrapper>
    );
};
