import { FC, Fragment } from 'react';
import { NextRouter, withRouter } from 'next/router';

import { productsMock } from 'data/products-mock';
import type { IBreadcrumb } from 'types/breadcrumbs';

import { Intro } from 'components/common/intro';
import { Content } from 'components/product-page/content';

interface IProps {
    router: NextRouter;
}

const product = productsMock.men[12];

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
                    rating: product.rating,
                    countReviews: product.reviews.length,
                }}
            />
            <Content product={product} />
        </Fragment>
    );
};

export const Product = withRouter(Component);
