import type { FC } from 'react';
import React from 'react';

import { css } from 'styled-components';

import { Component } from './styles';
import type { IProps } from './types';

export const Button: FC<IProps> = ({
    children,
    /** Возможность задать дополнительные стили */
    styles = css``,
    /** Тип кнопки, её внешний вид */
    view = 'primary',
    /** Размер компонента */
    size = 's',
    /** Растягивает компонент на ширину контейнера */
    block = false,
    /** Включение обводки */
    outline = false,
    /** Обработчик клика */
    onClick,
}) => (
    <Component
        styles={styles}
        view={view}
        size={size}
        block={block}
        outline={outline}
        onClick={onClick}
    >
        {children}
    </Component>
);
