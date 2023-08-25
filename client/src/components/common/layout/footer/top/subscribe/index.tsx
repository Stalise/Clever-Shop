import { FC } from 'react';

import { Button } from 'components/ui/button';

import { Field, Wrapper } from './style';

export const Subscribe: FC = () => {
    const handleClick = () => undefined;

    return (
        <Wrapper>
            <Field placeholder='Enter your email' />
            <Button outline={true} onClick={handleClick}>
                Join us
            </Button>
        </Wrapper>
    );
};
