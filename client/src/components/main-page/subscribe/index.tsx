import { FC } from 'react';

import { Button } from 'components/ui/button';

import manPicture from '../../../../public/static/man.png';
import womanPicture from '../../../../public/static/woman.png';

import {
    Container,
    Field,
    ManImage,
    Text,
    Title,
    WomanImage,
    Wrapper,
} from './styles';

export const Subscribe: FC = () => {
    const handleClick = () => {};

    return (
        <Wrapper>
            <Container>
                <Title>special offer</Title>
                <Text>
                    subscribe <br /> and <em>get 10% off</em>
                </Text>
                <Field type='email' placeholder='Enter your email' />
                <Button size='xl' onClick={handleClick}>
                    Subscribe
                </Button>
                <WomanImage
                    src={womanPicture}
                    width={584}
                    height={311}
                    alt='woman'
                />
                <ManImage
                    src={manPicture}
                    width={524}
                    height={219}
                    alt='woman'
                />
            </Container>
        </Wrapper>
    );
};
