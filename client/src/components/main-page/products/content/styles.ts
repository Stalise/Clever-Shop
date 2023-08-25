import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, minmax(200px, 255px));
    gap: 30px 30px;
    justify-content: space-between;
    margin-bottom: 45px;
`;
