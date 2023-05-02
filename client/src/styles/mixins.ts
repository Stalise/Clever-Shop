interface IFont {
    lineHeight?: string;
    size?: string;
    weight?: number;
}

interface IFlex {
    alignment?: string;
    direction?: string;
    gap?: string;
    justify?: string;
    wrap?: boolean;
}

export const font = ({ lineHeight, size, weight }: IFont) => `
    font-size: ${size || '14px'};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || '18px'};
`;

export const flex = ({ alignment, direction, gap, justify, wrap }: IFlex) => `
    display: flex;
    align-items: ${alignment || 'center'};
    gap: ${gap || ''};
    flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'space-between'};
`;
