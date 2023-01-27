import styled from 'styled-components';

export const ExampleStyle = styled.div`
  ${({ theme }) => `
        font-family: ${theme.fonts.body.m.highContrast.fontFamily};
        border: 2px solid black;
        color: ${theme.colors.text.default};
        background: ${theme.colors.bg.default};
        padding: 16px;
    `}
`;
