import { FC } from 'react';

import { Wrapper } from 'assets/styles/pages/main-page-styles';

import { Advantages } from 'components/main-page/advantages';
import { Showcase } from 'components/main-page/showcase';

const MainPage: FC = () => {
    return (
        <Wrapper>
            <Showcase />
            <Advantages />
        </Wrapper>
    );
};

export default MainPage;
