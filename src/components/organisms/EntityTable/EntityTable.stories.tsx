import React from 'react';
import { text } from '@storybook/addon-knobs';
import EntityTable, {Row, Cell} from './EntityTable';
import Tag from '~/components/atoms/Tag';

export default {
  title: '3.Organisms/EntityTable'
};

const headers = [
  'ID',
  'NAME',
  'AMOUNT',
  'TAGS',  
]

export const Default = () => (
  <EntityTable headers={headers}>
    <Row index={1}>
      <Cell>
        <p>1</p>    
      </Cell>
      <Cell>
        <p>ハイエナ勇者はサボりたい</p>  
      </Cell>
      <Cell>
        <p>24 個</p>  
      </Cell>
      <Cell>
        <Tag label={'未納品'} color={'#ffa6a6'}/>
        <Tag label={'1版'} color={'#a6ffd3'}/>
      </Cell>
    </Row>
  </EntityTable>
);