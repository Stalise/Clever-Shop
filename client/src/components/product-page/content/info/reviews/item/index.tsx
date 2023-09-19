import { FC } from 'react';

import type { IReview } from 'types/common';

import { Rating } from 'components/ui/rating';

import { getOrderDate } from './utils/get-order-date';

import { Date, Fullname, Info, Text, Top, Wrapper } from './styles';

interface IProps {
    review: IReview;
}

export const Item: FC<IProps> = ({ review: { text, date, name, rating } }) => (
    <Wrapper>
        <Top>
            <Fullname>{name}</Fullname>
            <Info>
                <Date>{getOrderDate(date)}</Date>
                <Rating rating={rating} />
            </Info>
        </Top>
        <Text>{text}</Text>
    </Wrapper>
);
