import React from 'react';
import { color, text } from '@storybook/addon-knobs';
import Tag from './Tag';

export default {
  title: '1.Atoms/Tag'
};

export const Default = () => (
  <Tag label={text('label','test')} color={color('color', '#000')} link={text('link', '/')} />
);