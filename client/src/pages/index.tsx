import { FC, Fragment } from 'react';

import { Advantages } from 'components/main-page/advantages';
import { Blog } from 'components/main-page/blog';
import { News } from 'components/main-page/news';
import { Products } from 'components/main-page/products';
import { Showcase } from 'components/main-page/showcase';
import { Subscribe } from 'components/main-page/subscribe';

const MainPage: FC = () => {
    return (
        <Fragment>
            <Showcase />
            <Advantages />
            <Products category='women' />
            <Products category='men' />
            <News />
            <Subscribe />
            <Blog />
        </Fragment>
    );
};

export default MainPage;
