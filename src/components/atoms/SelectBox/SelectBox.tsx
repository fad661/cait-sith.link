import React, { FC, MouseEventHandler, useState } from 'react';
import styles from '~/components/molecules/Box.styles';

type Props = {
  searchable?: boolean;
} & ListProps;

type ListProps = {
  choices: Choice[];
  selectedValues?: (string | number)[];
  multiple?: boolean;
  creatable?: boolean;
  onClickCreate?: (inputedValue: string | number) => void;
  onSelectCallback?: () => void;
};

type ItemProps = {
  label: string | number;
  value: string | number;
  onClick: () => void;
};

type Choice = {
  value: string | number;
  label: string | number;
};

const SelectBox: FC<Props> = ({
  choices,
  selectedChoices,
  onSelectCallback = () => {}
}) => {
  
  return (
    <div>
      <SelectedAndInputField />
      <ChoicesList />
    </div>
  );
};

const ChoicesList = FC<ListProps> => ({
  choices,
  onClickChoice = () => {}
}) => {
  <ul>
    {choices.map(({value, label}) => (
      <Choice label={label} value={value} onClick={onClickChoice}/>
    ))}
  </ul>
};

const Choice: FC<ItemProps> = ({
  label,
  onClick = () => {}
}) => {
  const 
  return (
    <li css={styles.li} onClick={onClick}>
      {label}
    </li>
  );
};

SelectBox.displayName = 'SelectBox';

export default SelectBox;