import React from 'react';
import { number } from '@storybook/addon-knobs';
import ComparableImages from './ComparableImages';

export default {
  title: '2.Molecules/ComparableImages'
};

/**
 * NOTICE: Storybookではnext/imageがimageに置き換わるので、object-fitなどが効かない
 */
export const Default = () => (
  <ComparableImages
    rightSrc='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVIqeT.img?h=1066&w=1598&m=6&q=60&o=f&l=f'
    leftSrc='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVH1lW.img?h=1200&w=1598&m=6&q=60&o=f&l=f'
    startBarPosition={number('Start Left Position (%)', 50)}
  />
);