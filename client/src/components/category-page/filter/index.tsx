import { FC } from 'react';

import type { FiltersType, handleFiltersChangeType } from 'types/filter';

import { declinationProductCount } from './utils/declination-products-count';
import { Checkbox } from './checkbox';
import { brands, colors, particulars, prices, sizes } from './data';

import {
    Container,
    Content,
    List,
    Result,
    TextAll,
    TextFirst,
    Title,
    Wrapper,
} from './styles';

const data = [colors, sizes, brands, prices, particulars];

interface IProps {
    isOpenFilter: boolean;
    filters: FiltersType;
    handleFiltersChange: handleFiltersChangeType;
}

export const Filter: FC<IProps> = ({
    isOpenFilter,
    filters,
    handleFiltersChange,
}) => (
    <Wrapper $isOpenFilter={isOpenFilter}>
        <Container>
            <Content $isOpenFilter={isOpenFilter}>
                {data.map(({ group, items }) => (
                    <List key={group}>
                        <Title>{group}</Title>

                        <ul>
                            {items.map((item) => (
                                <li key={item}>
                                    <Checkbox
                                        group={group}
                                        text={item}
                                        handleFiltersChange={
                                            handleFiltersChange
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </List>
                ))}
            </Content>
            <Result $isOpenFilter={isOpenFilter}>
                {[].length > 0 && (
                    <TextFirst>{declinationProductCount(4)}</TextFirst>
                )}
                {Object.entries(filters).map(
                    ([group, items]) =>
                        items.length > 0 && (
                            <TextAll key={group}>
                                {`${group}: `}
                                {items.map((elem, index) => {
                                    const isLast = index === items.length - 1;

                                    return isLast ? elem : `${elem}, `;
                                })}
                            </TextAll>
                        ),
                )}
            </Result>
        </Container>
    </Wrapper>
);
