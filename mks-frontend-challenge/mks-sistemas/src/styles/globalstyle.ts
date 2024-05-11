import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box,
}
body {
  ${({ theme }) => css`
  background:${theme.colors.bgColor};
`}
}
`;
