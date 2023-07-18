import { cloneElement, FC, ReactSVGElement, SVGProps } from 'react';

import { css } from 'styled-components';

import { Component } from './styles';
import type { IProps } from './types';

export const IconButton: FC<IProps> = ({
    /** SVG компонент */
    children,
    /** Возможность задать дополнительные стили */
    styles = css``,
    /** Тип кнопки, её внешний вид */
    view = 'accent',
    /** Размер компонента */
    size = 's',
    /** Цвет заливка иконки, необходимо для view === filled */
    color = 'transparent',
    /** Цвет обводки, необходимо для view === accent */
    outline = 'none',
    /** Позволяет переводить иконку в статус активной, работает с view === accent */
    isActive = false,
    /** Обработчик клика */
    onClick,
}) => {
    const SVG = cloneElement<SVGProps<SVGSVGElement>>(
        children as ReactSVGElement,
        { color, stroke: outline },
    );

    return (
        <Component
            styles={styles}
            view={view}
            size={size}
            isActive={isActive}
            onClick={onClick}
        >
            {SVG}
        </Component>
    );
};
