import { FC } from 'react';

import { IconButton } from 'components/ui/icon-button';
import SvgGlobeIconAccentL from 'components/ui/icons/globe-icon-accent-l';
import SvgSearchIconAccentL from 'components/ui/icons/search-icon-accent-l';
import SvgShoppingBagIconAccentL from 'components/ui/icons/shopping-bag-icon-accent-l';
import SvgUserIconAccentL from 'components/ui/icons/user-icon-accent-l';

import { Navigation } from './navigation';

import { Actions, Container, Logo, Wrapper } from './styles';

const data = [
    { Icon: SvgSearchIconAccentL },
    { Icon: SvgGlobeIconAccentL },
    { Icon: SvgUserIconAccentL },
    { Icon: SvgShoppingBagIconAccentL },
];

export const Bottom: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Logo href='/'>CleverShop</Logo>
                <Navigation />
                <Actions>
                    {data.map(({ Icon }, index) => (
                        <IconButton
                            size='l'
                            outline='var(--dark)'
                            onClick={() => undefined}
                            key={index}
                        >
                            <Icon />
                        </IconButton>
                    ))}
                </Actions>
            </Container>
        </Wrapper>
    );
};
