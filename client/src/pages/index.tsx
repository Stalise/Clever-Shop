import { FC, Fragment } from 'react';

import { Advantages } from 'components/main-page/advantages';
import { News } from 'components/main-page/news';
import { Products } from 'components/main-page/products';
import { Showcase } from 'components/main-page/showcase';

const MainPage: FC = () => {
    return (
        <Fragment>
            <Showcase />
            <Advantages />
            <Products category='women' />
            <Products category='men' />
            <News />
        </Fragment>
    );
};

export default MainPage;
