import { FC } from 'react';

import { css } from 'styled-components';

import { IconButton } from 'components/ui/icon-button';
import { StarIconFilledS } from 'components/ui/icons';

import { dimensions } from './config';
import { IProps } from './types';

import { Wrapper } from './styles';

export const Rating: FC<IProps> = ({
    /** Возможность задать дополнительные стили */
    styles = css``,
    /** Текущий рейтинг */
    rating = 1,
    /** Размер компонента */
    size = 's',
    /** Обработчик клика в который передается выбранный рейтинг */
    onClick,
}) => (
    <Wrapper styles={styles}>
        {[1, 2, 3, 4, 5].map((item, index) => {
            const color = index <= rating - 1 ? 'var(--yellow)' : 'var(--grey)';

            const currentDimensions = {
                width: dimensions[size],
                height: dimensions[size],
            };

            return onClick ? (
                <IconButton
                    size={size}
                    view='filled'
                    color={color}
                    onClick={() => onClick(item)}
                    key={item}
                >
                    <StarIconFilledS {...currentDimensions} />
                </IconButton>
            ) : (
                <StarIconFilledS
                    {...currentDimensions}
                    color={color}
                    key={item}
                />
            );
        })}
    </Wrapper>
);
