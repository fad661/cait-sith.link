import { useTheme } from '@emotion/react';
import React, { FC, useCallback, useMemo } from 'react';
import { EntityTableContextProvider, useEntityTableContext } from './EntitiyTable.context';
import styles from './EntityTable.styles';

type Props = {
  headers?: string[];
};

const EntityTable: FC<Props> = ({
  headers = [],
  children
}) => {
  const theme = useTheme();
  return (
    <table css={styles.table(theme)}>
      <thead>
        <tr>
          {headers?.map((header) => {
            return <td>{header}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export const Row: FC<{index: number}> = ({
  index,
  children,
}) => {
  const { selectedEntityIndexes, toggleSelectedEntity } = useEntityTableContext();

  const isSelected = useMemo(() => {
    return selectedEntityIndexes.includes(index);
  }, [index, selectedEntityIndexes]);

  const onClick = useCallback(() => {
    toggleSelectedEntity(index);
  }, [index]);

  return (
    <tr css={styles.row(isSelected)} onClick={onClick}>
      {children}
    </tr>
  );
}

export const Cell: FC = ({
  children
}) => (
  <td css={styles.cell}>
    {children}
  </td>
);


export default (props: Props) => (
  <EntityTableContextProvider>
    <EntityTable {...props} />
  </EntityTableContextProvider>
);