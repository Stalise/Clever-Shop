import { FC } from 'react';

import { Wrapper } from 'assets/styles/pages/main-page-styles';

import { Showcase } from 'components/main-page/showcase';

const MainPage: FC = () => {
    return (
        <Wrapper>
            <Showcase />
        </Wrapper>
    );
};

export default MainPage;
