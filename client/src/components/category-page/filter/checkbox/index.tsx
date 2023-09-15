import { FC, useState } from 'react';

import type { FilterGroupType, handleFiltersChangeType } from 'types/filter';

import { Color, Field, Text, Wrapper } from './styles';

interface IProps {
    group: FilterGroupType;
    text: string;
    handleFiltersChange: handleFiltersChangeType;
}

export const Checkbox: FC<IProps> = ({ group, text, handleFiltersChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        handleFiltersChange(group, text, isChecked);
        setIsChecked(!isChecked);
    };

    return (
        <Wrapper>
            <input onChange={handleClick} type='checkbox' />
            <Field $isChecked={isChecked} />
            {group === 'color' && <Color $color={text} />}
            <Text>{text}</Text>
        </Wrapper>
    );
};
