import { FC } from 'react';

import blogPictureFirst from '../../../../public/static/blog_picture-1.jpg';
import blogPictureSecond from '../../../../public/static/blog_picture-2.jpg';
import blogPictureThird from '../../../../public/static/blog_picture-3.jpg';
import {
    Container,
    Content,
    Item,
    StyledImage,
    StyledLink,
    Top,
    Wrapper,
} from './style';

const data = [
    {
        image: blogPictureFirst,
        title: 'the easiest way to break',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor ',
    },
    {
        image: blogPictureSecond,
        title: 'wedding weason',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor',
    },
    {
        image: blogPictureThird,
        title: 'recent favorites on repeat',
        text: 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor',
    },
];

export const Blog: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Top>
                    <h3>latest from blog</h3>
                    <StyledLink href={'/'}>see all</StyledLink>
                </Top>
                <Content>
                    {data.map(({ image, title, text }) => (
                        <Item key={title}>
                            <StyledImage
                                src={image}
                                width={350}
                                height={276}
                                placeholder='blur'
                                alt='woman'
                            />
                            <div>
                                <span>{title}</span>
                                <p>{text}</p>
                            </div>
                        </Item>
                    ))}
                </Content>
            </Container>
        </Wrapper>
    );
};
