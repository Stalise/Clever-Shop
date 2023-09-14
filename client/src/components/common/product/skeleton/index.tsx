import React from 'react';

import { Skeleton } from 'components/ui/skeleton';

import { container, cost, Info, rating, title, Wrapper } from './styles';

export const ProductSkeleton = () => (
    <Wrapper>
        <Skeleton styles={container} />
        <Skeleton styles={title} />
        <Info>
            <Skeleton styles={cost} />
            <Skeleton styles={rating} />
        </Info>
    </Wrapper>
);
