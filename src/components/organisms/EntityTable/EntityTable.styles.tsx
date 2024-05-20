import { css, Theme } from '@emotion/react';
import { COLOR, SHADOWS } from '~/styles/index.styles';

const styles = {
  table: (theme: Theme) => css`
    padding: 10px;
    box-shadow: ${SHADOWS.BOX};
    background-color: ${theme.colors.light.board};
    width: 100%;
  `,
  head: css``,
  body: css``,
  row: (isSelected: boolean) => css`
    cursor: pointer;
    display: flex;
    position: relative;
    border-bottom: 1px solid ${COLOR.MAIN};
    width: 100%;
    ${isSelected && blurFilter}
  `,
  cell: css`
    padding: 5px 10px;
    display: flex;
    gap: 5px;
  `,
};

const blurFilter = css`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.SELECTED};
    opacity: .6;
  }
`;

export default styles;