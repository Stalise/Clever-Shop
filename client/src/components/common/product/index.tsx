import { FC } from 'react';

import type { IProduct } from 'types/common';

import { Rating } from 'components/ui/rating';

import { subtractPercentages } from './utils/subtract-percentages';

import {
    Container,
    Info,
    Price,
    StyledImage,
    StyledLink,
    Title,
} from './styles';

interface IProps {
    data: IProduct;
}

export const Product: FC<IProps> = ({
    data: { category, images, discount, name, price, rating },
}) => {
    const pathToImage = `${process.env.NEXT_PUBLIC_CLOUDINARY}${category}/${images[0].url}`;

    return (
        <StyledLink href={'/'}>
            <Container>
                <StyledImage
                    src={pathToImage}
                    width={255}
                    height={365}
                    alt='product'
                />

                {discount && (
                    <div>
                        <span>-{discount}%</span>
                    </div>
                )}
            </Container>
            <Title>{name}</Title>
            <Info>
                <Price>
                    <span>
                        $&#8239;
                        {discount
                            ? subtractPercentages(price, discount)
                            : price}
                    </span>
                    {discount && <span>$&#8239;{price}</span>}
                </Price>
                <Rating rating={rating} />
            </Info>
        </StyledLink>
    );
};
