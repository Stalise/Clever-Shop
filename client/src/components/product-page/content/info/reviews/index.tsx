import { FC } from 'react';

import type { IReview } from 'types/common';
import { declinationReviewsCount } from 'utils/declination-reviews-count';

import { Button } from 'components/ui/button';
import SvgAnnotationIconAccentL from 'components/ui/icons/annotation-icon-accent-l';
import { Rating } from 'components/ui/rating';

import { Item } from './item';

import {
    Actions,
    Content,
    RatingContainer,
    StyledButton,
    Title,
    Wrapper,
} from './styles';

interface IProps {
    rating: number;
    reviews: IReview[];
}

export const Reviews: FC<IProps> = ({ rating, reviews }) => {
    const handleClick = () => undefined;

    return (
        <Wrapper>
            <Title>reviews</Title>
            <Actions>
                <RatingContainer>
                    <Rating rating={rating} size='m' />
                    <span>{declinationReviewsCount(reviews.length)}</span>
                </RatingContainer>
                <StyledButton>
                    <SvgAnnotationIconAccentL
                        color='transparent'
                        stroke='var(--dark-grey)'
                    />
                    <span>Write a review</span>
                </StyledButton>
            </Actions>
            {reviews.length > 0 && (
                <Content>
                    {reviews.map((item) => (
                        <Item key={item.id} review={item} />
                    ))}
                    <Button view='secondary' block={true} onClick={handleClick}>
                        see all
                    </Button>
                </Content>
            )}
        </Wrapper>
    );
};
