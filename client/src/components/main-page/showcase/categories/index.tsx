import { FC } from 'react';

import { Banner, StyledImage, StyledLink, Top, Wrapper } from './styles';

const data = [
    { name: 'Women', image: 'women_category.jpg', path: '#!' },
    { name: 'Men', image: 'men_category.jpg', path: '#!' },
];

export const Categories: FC = () => (
    <Wrapper>
        <Top>
            {data.map(({ name, image, path }) => (
                <Banner bannerWidth='50%' bannerHeight='200px' key={name}>
                    <StyledImage
                        src={`/static/${image}`}
                        width={255}
                        height={200}
                        alt={`${name} category`}
                        priority
                    />
                    <StyledLink href={path} $maxWidth='120px'>
                        {name}
                    </StyledLink>
                </Banner>
            ))}
        </Top>
        <div>
            <Banner bannerWidth='100%' bannerHeight='260px'>
                <StyledImage
                    src='/static/accessories_category.jpg'
                    width={540}
                    height={260}
                    alt='Accessories category'
                    priority
                />
                <StyledLink $maxWidth='165px' href='#!'>
                    Accessories
                </StyledLink>
            </Banner>
        </div>
    </Wrapper>
);
