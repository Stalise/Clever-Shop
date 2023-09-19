import { FC } from 'react';

import { IProduct } from 'types/common';
import { subtractPercentages } from 'utils/subtract-percentages';

import { Button } from 'components/ui/button';
import { IconButton } from 'components/ui/icon-button';
import SvgHeartIconAccentL from 'components/ui/icons/heart-icon-accent-l';
import SvgScaleIconAccentL from 'components/ui/icons/scale-icon-accent-l';

import { Wrapper } from './styles';

export const Actions: FC<Pick<IProduct, 'price' | 'discount'>> = ({
    price,
    discount,
}) => {
    const handleClick = () => undefined;

    return (
        <Wrapper>
            <span>
                $&#8239;
                {discount ? subtractPercentages(price, discount) : price}
            </span>
            <Button size='m' onClick={handleClick}>
                add to card
            </Button>
            <IconButton
                size='l'
                outline='var(--dark)'
                onClick={() => undefined}
            >
                <SvgHeartIconAccentL />
            </IconButton>
            <IconButton
                size='l'
                outline='var(--dark)'
                onClick={() => undefined}
            >
                <SvgScaleIconAccentL />
            </IconButton>
        </Wrapper>
    );
};
