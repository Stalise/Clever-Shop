import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    button {
        display: flex;
        align-items: center;
        background-color: transparent;
        transition: 300ms;

        &:hover {
            transform: scale(0.9);
        }

        span {
            ${fontSpartan('l', '300')}

            margin-left: 5px;
            padding-top: 3px;
            color: var(--dark-grey);
        }
    }
`;
