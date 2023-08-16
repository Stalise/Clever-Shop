import { FC, Fragment } from 'react';

import { categories, contacts, information, useful } from 'data/footer';

import {
    Container,
    InfoItem,
    Item,
    List,
    Number,
    StyledLink,
    Text,
    Title,
    Wrapper,
} from './styles';

export const Content: FC = () => {
    return (
        <Wrapper>
            <Container>
                {[categories, information, useful].map(({ title, data }) => (
                    <List key={title}>
                        <Item>
                            <Title>{title}</Title>
                        </Item>

                        {data.map(({ link, text }) => (
                            <Item key={text}>
                                <StyledLink href={link}>{text}</StyledLink>
                            </Item>
                        ))}
                    </List>
                ))}
                <List>
                    <InfoItem>
                        <Title>{contacts.title}</Title>
                    </InfoItem>

                    {contacts.data.map(({ Icon, text }, index) => (
                        <InfoItem key={text}>
                            {index === 1 ? (
                                <Number href='tel:+375291002030'>
                                    <Icon
                                        color='transparent'
                                        stroke='var(--dark)'
                                    />
                                    <Text>{text}</Text>
                                </Number>
                            ) : (
                                <Fragment>
                                    <Icon
                                        color='transparent'
                                        stroke='var(--dark)'
                                    />
                                    <Text>{text}</Text>
                                </Fragment>
                            )}
                        </InfoItem>
                    ))}
                </List>
            </Container>
        </Wrapper>
    );
};