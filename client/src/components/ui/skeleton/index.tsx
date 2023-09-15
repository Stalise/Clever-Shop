import { FC } from 'react';

import { css } from 'styled-components';

import { IProps } from './types';

import { Wrapper } from './styles';

export const Skeleton: FC<IProps> = ({
    /** Возможность задать дополнительные стили */
    styles = css``,
}) => <Wrapper $styles={styles} />;
