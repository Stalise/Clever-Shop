import { css } from 'styled-components';

export const nullStyles = css`
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :focus,
    :active {
        outline: none;
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
    }

    a:focus,
    a:active {
        outline: none;
    }

    nav,
    footer,
    header,
    aside {
        display: block;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-size: 100%;
        font-size: 14px;
        line-height: 1;
        text-size-adjust: 100%;
    }

    input,
    button,
    textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 400;
        font-size: inherit;
    }
`;
