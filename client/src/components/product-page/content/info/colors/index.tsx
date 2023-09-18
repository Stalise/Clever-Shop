import { FC } from 'react';

import type { CategoriesType, IImage } from 'types/common';

import { getUniqueColors } from './utils/get-unique-colors';

import { Images, StyledImage, Text, Wrapper } from './styles';

interface IProps {
    images: IImage[];
    selectedColor: string;
    category: CategoriesType;
    handleColorChange: (value: string) => void;
}

export const Colors: FC<IProps> = ({
    images,
    category,
    selectedColor,
    handleColorChange,
}) => {
    const pathToImage = `${process.env.NEXT_PUBLIC_CLOUDINARY}${category}/`;
    const uniqueColors = getUniqueColors(images);

    return (
        <Wrapper>
            <Text>
                <span>Color:</span>
                <b>{selectedColor}</b>
            </Text>
            <Images>
                {Object.entries(uniqueColors).map(([color, url]) => (
                    <div key={color} onClick={() => handleColorChange(color)}>
                        <StyledImage
                            src={`${pathToImage}${url}`}
                            height={65}
                            width={65}
                            alt='product'
                            $selected={selectedColor === color}
                        />
                    </div>
                ))}
            </Images>
        </Wrapper>
    );
};
