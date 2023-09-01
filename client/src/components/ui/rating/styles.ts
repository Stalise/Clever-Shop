import styled from 'styled-components';

import type { IStyledProps } from './types';

export const Wrapper = styled.div<IStyledProps>`
    ${({ $styles }) => $styles}
`;
