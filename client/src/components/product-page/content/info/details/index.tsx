import { FC } from 'react';

import { Content, Title, Wrapper } from './styles';

interface IProps {
    colors: string[];
    sizes: string[];
    materials: string[];
}

export const Details: FC<IProps> = ({ colors, materials, sizes }) => {
    const data = { colors, sizes, materials };

    return (
        <Wrapper>
            <Title>additional information</Title>
            {Object.entries(data).map(([group, items]) => (
                <Content key={group}>
                    <em>{group}: </em>
                    <span>
                        {items.map((elem, index) => {
                            const isLast = index === items.length - 1;

                            return isLast ? elem : `${elem}, `;
                        })}
                    </span>
                </Content>
            ))}
        </Wrapper>
    );
};
