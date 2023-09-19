import { FC } from 'react';
import { useRouter } from 'next/router';

import type { IBreadcrumb } from 'types/breadcrumbs';
import { declinationReviewsCount } from 'utils/declination-reviews-count';

import { Rating } from 'components/ui/rating';

import { Breadcrumbs } from './breadcrumbs';
import { Share } from './share';

import {
    Bottom,
    Container,
    Info,
    RatingContainer,
    Text,
    Top,
    Wrapper,
} from './styles';

interface IProps {
    breadcrumbs: IBreadcrumb[];
    bottomContent?: {
        rating: number;
        countReviews: number;
    };
}

const data = [
    { type: 'SKU:', value: '777' },
    { type: 'Availability:', value: 'In Stock' },
];

export const Intro: FC<IProps> = ({ breadcrumbs, bottomContent }) => {
    const {
        query: { category },
    } = useRouter();

    return (
        <Wrapper>
            <Container>
                <Top>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <Share />
                </Top>
                <Text>{category}</Text>
                {bottomContent && (
                    <Bottom>
                        <RatingContainer>
                            <Rating rating={bottomContent.rating} />
                            <span>
                                {declinationReviewsCount(
                                    bottomContent.countReviews,
                                )}
                            </span>
                        </RatingContainer>
                        <Info>
                            <ul>
                                {data.map(({ type, value }) => (
                                    <li key={type}>
                                        <span>{type}</span>
                                        <b>{value}</b>
                                    </li>
                                ))}
                            </ul>
                        </Info>
                    </Bottom>
                )}
            </Container>
        </Wrapper>
    );
};
