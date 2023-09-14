import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import type { IBreadcrumbs } from 'types/breadcrumbs';
import type { handleFiltersChangeType } from 'types/filter';

import { Actions } from 'components/category-page/actions';
import { Filter } from 'components/category-page/filter';
import { Products } from 'components/category-page/products';
import { Intro } from 'components/common/intro';

import { filtersData } from './data';

export const Category: FC = () => {
    const {
        query: { category },
    } = useRouter();

    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [filters, setFilters] = useState(filtersData);

    const breadcrumbs: IBreadcrumbs = [
        { text: 'Home', path: '/' },
        { text: category as string },
    ];

    const handleFiltersChange: handleFiltersChangeType = (
        group,
        text,
        isChecked,
    ) => {
        const result = isChecked
            ? filters[group].filter((item) => item !== text)
            : [...filters[group], text];

        setFilters({
            ...filters,
            [group]: result,
        });
    };

    return (
        <div>
            <Intro breadcrumbs={breadcrumbs} />
            <Actions
                isOpenFilter={isOpenFilter}
                setIsOpenFilter={setIsOpenFilter}
            />
            <Filter
                isOpenFilter={isOpenFilter}
                filters={filters}
                handleFiltersChange={handleFiltersChange}
            />
            <Products />
        </div>
    );
};
