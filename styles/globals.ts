import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;   
    }

html, body {
    ${tw`dark:bg-gray-900 text-black dark:text-white m-0 p-0`}
    scroll-behavior: smooth;
    font-family: 'Kanit', sans-serif;
    }

h1,
h2,
h3 {
    font-family: 'Kanit', sans-serif;
}

a {
    text-decoration: none;
}

a, a:active, a:visited {
    border:none
}

button {
    font: inherit;
    cursor: pointer;
}
`;
