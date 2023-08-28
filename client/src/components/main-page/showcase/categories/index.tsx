import { FC } from 'react';

import accessoriesCategoryPicture from '../../../../../public/static/accessories_category.jpg';
import menCategoryPicture from '../../../../../public/static/men_category.jpg';
import womenCategoryPicture from '../../../../../public/static/women_category.jpg';

import { Banner, StyledImage, StyledLink, Top, Wrapper } from './styles';

const data = [
    { name: 'Women', image: womenCategoryPicture, path: 'women' },
    { name: 'Men', image: menCategoryPicture, path: 'men' },
];

export const Categories: FC = () => (
    <Wrapper>
        <Top>
            {data.map(({ name, image, path }) => (
                <Banner bannerWidth='50%' bannerHeight='200px' key={name}>
                    <StyledImage
                        src={image}
                        width={255}
                        height={200}
                        placeholder='blur'
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
                    src={accessoriesCategoryPicture}
                    width={540}
                    height={260}
                    placeholder='blur'
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
