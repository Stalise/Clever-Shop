import { FC } from 'react';
import Image from 'next/image';

import { data } from './data';

import { Content, Top, Wrapper } from './styles';

export const Payment: FC = () => (
    <Wrapper>
        <Top>
            <span>guaranteed safe checkout</span>
            <div />
        </Top>
        <Content>
            {data.map(({ path, width }) => (
                <div key={path}>
                    <Image src={path} width={width} height={22} alt='payment' />
                </div>
            ))}
        </Content>
    </Wrapper>
);
