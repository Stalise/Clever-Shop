import { FC, Fragment } from 'react';
import { NextRouter, withRouter } from 'next/router';

import { productsMock } from 'data/products-mock';
import type { IBreadcrumb } from 'types/breadcrumbs';

import { Intro } from 'components/common/intro';

interface IProps {
    router: NextRouter;
}

const { rating, reviews } = productsMock.women[0];

const Component: FC<IProps> = ({ router }) => {
    const { category, id } = router.query;

    const breadcrumbs: IBreadcrumb[] = [
        { text: 'Home', path: '/' },
        { text: category, path: `/${category}` },
        { text: id },
    ];

    return (
        <Fragment>
            <Intro
                breadcrumbs={breadcrumbs}
                bottomContent={{
                    rating,
                    countReviews: reviews.length,
                }}
            />
        </Fragment>
    );
};

export const Product = withRouter(Component);
