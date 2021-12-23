import React, { FC } from 'react';
import Link from 'next/link';

import style from './Tag.styles';

type Props = {
  label: string;
  link?: string;
  color?: string;
}
export const Tag: FC<Props> = ({
  label,
  link,
  color
}) => {
  return (
    <>
      {link ? (
        <Link href={link} passHref>
          <a css={style(color)}>
            {label}
          </a>
        </Link>
      ) : (
        <span css={style(color)}>
          {label}
        </span>
      )}
    </>
  );
};

export default Tag;