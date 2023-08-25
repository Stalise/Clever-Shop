import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;

    h2 {
        ${fontSpartan('2xl', '500')}

        letter-spacing: 0.6px;
        text-transform: uppercase;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 30px;
            }

            span {
                ${fontSpartan('l', '300')}

                color: var(--dark-grey);
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: 300ms;

                &:hover {
                    color: var(--dark);
                }
            }
        }
    }
`;
