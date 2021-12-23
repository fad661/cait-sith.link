import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/index.styles';

const style = (color?: string) => css`
  background: ${color || COLOR.NORMAL};
  border: 2px solid;
  border-color: ${color || COLOR.NORMAL};
  border-radius: 5px;
  color: ${COLOR.BASE};
  font-size: ${FONT.SIZE.S};
  text-decoration: none;
  padding: 2px 5px;
  transition: .2s filter ease-in;

  &:is(a):hover {
    filter: brightness(.8);
  }
`;

export default style;