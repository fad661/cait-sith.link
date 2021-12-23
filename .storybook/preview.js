import { addParameters } from '@storybook/react';
import * as nextImage from 'next/image';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Global } from '@emotion/react';
import reset from '../src/styles/reset.styles';

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
});

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const decorators = [
  (Story) => (
    <>
      <Global styles={reset} />
      <Story />
    </>
  ),
];