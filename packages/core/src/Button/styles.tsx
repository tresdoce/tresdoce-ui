import styled from 'styled-components';

export const ButtonStyle = styled.button`
  ${({ theme }) => `
        font-family: ${theme.fonts.body.m.highContrast.fontFamily};
        border: 0;
        color: ${theme.colors.text.default};
        background: ${theme.colors.bg.default};
        border-radius: 8px;
        line-height:24px;
        cursor: pointer;
        padding: 16px;
        -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          transition: all 0.3s;
    `}

  &:hover {
    ${({ theme }) => `
        background: ${theme.colors.bg.hover};
        `}
  }

  &:active {
    ${({ theme }) => `
        background: ${theme.colors.bg.pressed};
        `}
  }

  &:disabled {
    ${({ theme }) => `
        background: ${theme.colors.bg.disabled};
        cursor: initial;
        `}
  }
`;
