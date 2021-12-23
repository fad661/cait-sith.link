import React from 'react';
import { files, text } from '@storybook/addon-knobs';
import Thumbnail from './Thumbnail';

export default {
  title: '1.Atoms/Thumbnail'
};

export const Default = () => (
  <Thumbnail src={text('Src', '')} />
);