import { FC } from 'react';

import newsFirstPicture from '../../../../public/static/news_first.jpg';
import newsSecondPicture from '../../../../public/static/news_second.jpg';

import { Container, Content, Item, StyledImage, Wrapper } from './styles';

const data = [
    {
        image: newsFirstPicture,
        title: 'new season',
        text: 'lookbook collection',
    },
    {
        image: newsSecondPicture,
        title: 'sale',
        text: 'get up to <em>50% off</em>',
    },
];

export const News: FC = () => (
    <Wrapper>
        <Container>
            {data.map(({ image, title, text }) => (
                <Item key={title}>
                    <Content>
                        <StyledImage
                            src={image}
                            width={540}
                            height={260}
                            placeholder='blur'
                            alt='news'
                        />
                        <div>
                            <span>{title}</span>
                            <span dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </Content>
                </Item>
            ))}
        </Container>
    </Wrapper>
);
