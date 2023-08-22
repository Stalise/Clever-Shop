import { FC } from 'react';

import { css } from 'styled-components';

import { StarIconFilledS } from 'components/ui/icons';

import { dimensions } from './config';
import { IProps } from './types';

import { Wrapper } from './styles';

export const Rating: FC<IProps> = ({
    /** Возможность задать дополнительные стили */
    styles = css``,
    rating = 1,
    size = 's',
    onClick,
}) => (
    <Wrapper styles={styles}>
        {[1, 2, 3, 4, 5].map((item, index) => (
            <StarIconFilledS
                onClick={onClick ? () => onClick(item) : undefined}
                height={dimensions[size]}
                width={dimensions[size]}
                color={index <= rating - 1 ? 'var(--yellow)' : 'var(--grey)'}
                key={item}
            />
        ))}
    </Wrapper>
);
