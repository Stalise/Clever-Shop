import { FC } from 'react';

import SvgRefreshIconAccent2Xl from 'components/ui/icons/refresh-icon-accent-2xl';
import SvgSupportIconAccent2Xl from 'components/ui/icons/support-icon-accent-2xl';
import SvgTruckIconAccent2Xl from 'components/ui/icons/truck-icon-accent-2xl';

import { Container, Item, Text, TextContainer, Title, Wrapper } from './styles';

const data = [
    {
        Icon: SvgTruckIconAccent2Xl,
        title: 'Free shipping',
        text: 'On all UA order or order above $100',
    },
    {
        Icon: SvgRefreshIconAccent2Xl,
        title: '30 days return',
        text: 'Simply return it within 30 days for an exchange',
    },
    {
        Icon: SvgSupportIconAccent2Xl,
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
