interface IFont {
    lineHeight?: number;
    size?: number;
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
    font-size: ${size || 14}px;
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 18}px;
`;

export const flex = ({ alignment, direction, gap, justify, wrap }: IFlex) => `
    display: flex;
    align-items: ${alignment || 'center'};
    gap: ${gap || ''};
    flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'space-between'};
`;
