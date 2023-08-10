import { FC } from 'react';
import Link from 'next/link';

import SvgFacebookIconFilledS from 'components/ui/icons/facebook-icon-filled-s';
import SvgInstagramIconFilledS from 'components/ui/icons/instagram-icon-filled-s';
import SvgPinterestIconFilledS from 'components/ui/icons/pinterest-icon-filled-s';
import SvgTwitterIconFilledS from 'components/ui/icons/twitter-icon-filled-s';

import { Button, Wrapper } from './styles';

const data = [
    { Icon: SvgFacebookIconFilledS, path: 'https://www.facebook.com' },
    { Icon: SvgTwitterIconFilledS, path: 'https://www.twitter.com' },
    { Icon: SvgInstagramIconFilledS, path: 'https://www.instagram.com' },
    { Icon: SvgPinterestIconFilledS, path: 'https://www.pinterest.com' },
];

export const Socials: FC = () => (
    <Wrapper>
        {data.map(({ Icon, path }) => (
            <Button type='button' key={path}>
                <Link href={path} target='_blank'>
                    <Icon color='var(--grey)' />
                </Link>
            </Button>
        ))}
    </Wrapper>
);
