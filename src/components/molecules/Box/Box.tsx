import React, { FC } from 'react';
import styles from './Box.styles';

const Box: FC = ({
  children
}) => {
  return (
    <section css={styles.section}>
      {children}
    </section>
  );
};

Box.displayName = 'Box';

export default Box;