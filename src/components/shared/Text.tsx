import { colors, Colors } from '@/styles/colorPalette';
import { Typograph, typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface TextProps {
  typography?: Typograph;
  color?: Colors;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  fontWeight?: CSSProperties['fontWeight'];
  bold?: boolean;
}

const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
);

export default Text;
