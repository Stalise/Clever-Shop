import { FC, useState } from 'react';

import type SwiperCore from 'swiper';

import type { CategoriesType, IImage } from 'types/common';

import { Main } from './main';
import { Secondary } from './secondary';

import { Wrapper } from './styles';

interface IProps {
    images: IImage[];
    selectedColor: string;
    category: CategoriesType;
}

export const Sliders: FC<IProps> = ({ images, selectedColor, category }) => {
    const [secondarySlider, setSecondarySlider] = useState<SwiperCore | null>(
        null,
    );

    const currentImages = images.filter(({ color }) => color === selectedColor);

    return (
        <Wrapper>
            <Secondary
                currentImages={currentImages}
                category={category}
                setSlider={setSecondarySlider}
            />
            <Main
                currentImages={currentImages}
                category={category}
                slider={secondarySlider}
            />
        </Wrapper>
    );
};
