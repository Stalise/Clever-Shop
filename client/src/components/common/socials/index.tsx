import { FC } from 'react';

import SvgFacebookIconFilledS from 'components/ui/icons/facebook-icon-filled-s';
import SvgInstagramIconFilledS from 'components/ui/icons/instagram-icon-filled-s';
import SvgPinterestIconFilledS from 'components/ui/icons/pinterest-icon-filled-s';
import SvgTwitterIconFilledS from 'components/ui/icons/twitter-icon-filled-s';

import { StyledLink, Wrapper } from './styles';

const data = [
    { Icon: SvgFacebookIconFilledS, path: 'https://www.facebook.com' },
    { Icon: SvgTwitterIconFilledS, path: 'https://www.twitter.com' },
    { Icon: SvgInstagramIconFilledS, path: 'https://www.instagram.com' },
    { Icon: SvgPinterestIconFilledS, path: 'https://www.pinterest.com' },
];

export const Socials: FC = () => (
    <Wrapper>
        {data.map(({ Icon, path }) => (
            <StyledLink href={path} target='_blank' key={path}>
                <Icon color='var(--grey)' />
            </StyledLink>
        ))}
    </Wrapper>
);
