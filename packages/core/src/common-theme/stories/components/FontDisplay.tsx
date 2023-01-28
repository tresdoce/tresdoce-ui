import React, { FC } from 'react';
import { css, Global } from '@storybook/theming';
import { Font, ITheme } from '../../interfaces';

export interface FontRendererProps {
  variant: any;
  variantName: string;
}

const formatContrast = (contrast: string) => {
  switch (contrast.toLowerCase()) {
    case 'highcontrast':
      return 'High Contrast';
    case 'highcontrast-uppercase':
      return 'High Contrast Uppercase';
    case 'midcontrast':
      return 'Mid Contrast';
    case 'midcontrast-underline':
      return 'Mid Contrast Underline';
    case 'lowcontrast':
      return 'Low Contrast';
    default:
      return contrast;
  }
};

const FontExample: FC<
  Font & { variantName: string; index: number; contrast: string; sizeText?: string }
> = ({
  variantName,
  contrast,
  sizeText = undefined,
  fontSize,
  fontFamily,
  letterSpacing,
  lineHeight,
  fontWeight,
  underline = false,
  uppercase = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '5rem',
        borderBottom: '1px solid #f3f4f6',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          lineHeight: lineHeight,
          textDecoration: underline ? 'underline' : 'none',
          textTransform: uppercase ? 'uppercase' : 'none',
        }}
      >
        {variantName} {sizeText !== 'default' && sizeText?.toUpperCase()} {' - '}
        {formatContrast(contrast)}
      </span>
      <p
        style={{
          width: '450px',
          fontSize: '0.875rem',
          lineHeight: '1.125rem',
          color: 'rgb(107,114,128)',
        }}
      >
        {fontFamily} {fontWeight}, {fontSize} ({lineHeight} line-height)
        <br />
        <span
          style={{
            fontSize: '0.75rem',
            lineHeight: '1rem',
            color: 'rgb(107,114,128)',
            textAlign: 'right',
          }}
        >
          font-
          {variantName.toLowerCase()}-{contrast.toLowerCase()}
          {sizeText && sizeText !== 'default' && `-${sizeText}`}
        </span>
      </p>
    </div>
  );
};

const FontRenderer: FC<FontRendererProps> = ({ variant, variantName }) => {
  return (
    <>
      <h1 style={{ padding: '1rem 0', fontSize: '2.75rem', color: 'gray' }}>{variantName}</h1>
      <hr />

      {Object.entries(variant).map(([textSize, listStyles]) => {
        return Object.entries(listStyles as object).map(([contrast, font], indexFont) => (
          <div key={`variant-${variantName}-${contrast}-${textSize}-${indexFont}`}>
            <FontExample
              {...font}
              variantName={variantName}
              index={indexFont}
              contrast={contrast}
              sizeText={textSize}
            />
          </div>
        ));
      })}
    </>
  );
};

const Separator = () => <div style={{ margin: '25px 0px' }}></div>;

const FontDisplay = (theme: ITheme) => {
  const {
    fonts: { title, body, caption, overline },
  } = theme;

  const style = css`
    @import url(${theme.fonts.fontSheetLink});
  `;

  if (!theme) return null;

  return (
    <div>
      <Global styles={style} />
      <FontRenderer variant={title} variantName="Title" />
      <Separator />
      <FontRenderer variant={body} variantName="Body" />
      <Separator />
      <FontRenderer variant={caption} variantName="Caption" />
      <Separator />
      <FontRenderer variant={overline} variantName="Overline" />
    </div>
  );
};

export default FontDisplay;
