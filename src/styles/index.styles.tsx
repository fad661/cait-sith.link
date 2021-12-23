import { css } from '@emotion/react';

export const SHADOWS = {
  NARROW: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
} as const;

const BP = {
  FIRST: 600,
  SECOND: 960
} as const;

export const ASPECT = {
  THUMBNAIL: '1.41 / 1',
} as const;

export const WIDTH = {
  THUMBNAIL: '423px',
} as const;

export const HEIGHT = {
  THUMBNAIL: '300px',
} as const;

export const  MQ = {
  MOBILE: `@media screen and (max-width: ${BP.FIRST}px)`,
  TABLET: `@media screen and (min-width: ${BP.FIRST}px) and (max-width: ${BP.SECOND}px)`,
  DESKTOP: `@media screen and (min-width: ${BP.SECOND}px)`,
} as const;

export const COLOR = {
  BASE: '#fff',
  MAIN: '#e84566',
  NORMAL: '#000',
  PLACEHOLDER: '#eee',
  DISABLED: '#aaa',
} as const;

export const FONT = {
  SIZE: {
    S: '11px',
    M: '13px',
    L: '18px'
  } as const,
  COLOR: {
    NORMAL: COLOR.NORMAL,
  } as const,
} as const;