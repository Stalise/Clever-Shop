import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 95px;
    padding: 0 15px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, minmax(200px, 255px));
    gap: 30px 30px;
    justify-content: space-between;
    max-width: 1110px;
    margin: 0 auto;
`;
