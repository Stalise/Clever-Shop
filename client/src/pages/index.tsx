import { FC, Fragment } from 'react';

import { Advantages } from 'components/main-page/advantages';
import { Showcase } from 'components/main-page/showcase';

const MainPage: FC = () => {
    return (
        <Fragment>
            <Showcase />
            <Advantages />
        </Fragment>
    );
};

export default MainPage;
