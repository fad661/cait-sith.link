import { css } from '@emotion/react';
import { COLOR } from '~/styles/index.styles';

const triangleBase = css`
  content: "";
  position: absolute;
  top: 50%;
  display: block;
  border: 10px solid transparent;
  transform: translateY(-50%);
`;

const onSamePosition = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const styles = {
  wrapper: (aspectRatio: string) => css`
    overflow: hidden;
    width: 100%;
    position: relative;
    aspect-ratio: ${aspectRatio};
  `,
  leftWrapper: css`
    aspect-ratio: 2 / 1;
    ${onSamePosition}
  `,
  rightWrapper: css`
    ${onSamePosition}
  `,
  imageWrapper: (aspectRatio: string) => css`
    user-select: none;
    pointer-events: none;
    position: relative;
    width: 100%;
    aspect-ratio: ${aspectRatio};
  `,
  bar: css`
    cursor: pointer;
    position: absolute;
    width: 4px;
    background: ${COLOR.BASE};
    height: 100%;

    &::before {
      ${triangleBase}
      left: -25px;
      border-right-color: ${COLOR.BASE};
      transition: left .2s ease-in;
    }

    &::after {
      ${triangleBase}
      right: -25px;
      border-left-color: ${COLOR.BASE};
      transition: right .2s ease-in;
    }

    &:hover {
      &::before {
        left: -27px;
      }

      &::after {
        right: -27px;
      }
    }
  `
};

export default styles;