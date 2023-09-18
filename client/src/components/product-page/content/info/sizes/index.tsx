import { FC, useState } from 'react';

import { Hanger } from './hanger';

import { Button, Content, Text, Wrapper } from './styles';

interface IProps {
    sizes: string[];
}

export const Sizes: FC<IProps> = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
    };

    return (
        <Wrapper>
            <Text>
                <span>Size:</span>
                <b>{selectedSize}</b>
            </Text>
            <Content>
                {sizes.map((item) => (
                    <Button
                        key={item}
                        type='button'
                        $selected={selectedSize === item}
                        onClick={() => handleSizeChange(item)}
                    >
                        {item}
                    </Button>
                ))}
            </Content>
            <Hanger />
        </Wrapper>
    );
};
