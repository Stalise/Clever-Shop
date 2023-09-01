import { FC } from 'react';
import { useRouter } from 'next/router';

import { IBreadcrumbs } from 'types/breadcrumbs';

import { Intro } from 'components/common/intro';

const Category: FC = () => {
    const {
        query: { category },
    } = useRouter();

    const breadcrumbs: IBreadcrumbs = [
        { text: 'Home', path: '/' },
        { text: category as string },
    ];

    return (
        <div>
            <Intro
                breadcrumbs={breadcrumbs}
                bottomContent={{ rating: 4, countReviews: 2 }}
            />
        </div>
    );
};

export default Category;
