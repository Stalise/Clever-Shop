import { FC, Fragment } from 'react';

import { Advantages } from 'components/main-page/advantages';
import { Products } from 'components/main-page/products';
import { Showcase } from 'components/main-page/showcase';

const MainPage: FC = () => {
    return (
        <Fragment>
            <Showcase />
            <Advantages />
            <Products category='women' />
            <Products category='men' />
        </Fragment>
    );
};

export default MainPage;
