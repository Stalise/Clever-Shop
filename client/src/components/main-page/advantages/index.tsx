import { FC } from 'react';

import SvgRefreshIconAccentXl from 'components/ui/icons/refresh-icon-accent-xl';
import SvgSupportIconAccentXl from 'components/ui/icons/support-icon-accent-xl';
import SvgTruckIconAccentXl from 'components/ui/icons/truck-icon-accent-xl';

import { Container, Item, Text, TextContainer, Title, Wrapper } from './styles';

const data = [
    {
        Icon: SvgTruckIconAccentXl,
        title: 'Free shipping',
        text: 'On all UA order or order above $100',
    },
    {
        Icon: SvgRefreshIconAccentXl,
        title: '30 days return',
        text: 'Simply return it within 30 days for an exchange',
    },
    {
        Icon: SvgSupportIconAccentXl,
        title: 'Support 24/7',
        text: 'Contact us 24 hours a day, 7 days a week',
    },
];

export const Advantages: FC = () => (
    <Wrapper>
        <Container>
            {data.map(({ Icon, title, text }) => (
                <Item key={title}>
                    <Icon color='transparent' stroke='var(--dark)' />
                    <TextContainer>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                    </TextContainer>
                </Item>
            ))}
        </Container>
    </Wrapper>
);
