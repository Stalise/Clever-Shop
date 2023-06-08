import type { DimensionsType, TypographyType, ViewsConfigType } from './types';

export const views: ViewsConfigType = {
    accent: {
        color: 'var(--dark)',
        backgroundColor: 'var(--light-grey)',
        outline: '1.2px solid var(--dark)',
        hover: {
            backgroundColor: 'var(--grey)',
        },
        active: {
            color: 'var(--light)',
            backgroundColor: 'var(--dark-grey)',
        },
    },
    primary: {
        color: 'var(--light)',
        backgroundColor: 'var(--dark)',
        outline: '1.2px solid var(--light-grey)',
        hover: {
            color: 'var(--dark)',
            backgroundColor: 'var(--grey)',
        },
        active: {
            backgroundColor: 'var(--dark-grey)',
        },
    },
    secondary: {
        color: 'var(--dark)',
        backgroundColor: 'var(--grey)',
        outline: '1.2px solid var(--dark)',
        hover: {
            backgroundColor: 'var(--light-grey)',
        },
        active: {
            color: 'var(--light)',
            backgroundColor: 'var(--dark-grey)',
        },
    },
};

export const dimensions: DimensionsType = {
    s: {
        width: '108px',
        padding: '9px 0 7px 0',
    },
    m: {
        width: '156px',
        padding: '13px 0 11px 0',
    },
    l: {
        width: '340px',
        padding: '17px 0 14px 0',
    },
};

export const typography: TypographyType = {
    s: {
        size: 's',
        weight: '500',
    },
    m: {
        size: 'm',
        weight: '500',
    },
    l: {
        size: 'l',
        weight: '500',
    },
};
