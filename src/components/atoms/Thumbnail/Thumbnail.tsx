import React, { FC } from 'react';
import Image from 'next/image';

import style from './Thumbnail.styles';

type Props = {
  src: string;
}
export const Thumbnail: FC<Props> = ({
  src
}) => {
  
  return (
    <picture css={style}>
      <Image
        width={48}
        height={48}
        src={src}
        layout={'fill'}
        objectFit={'contain'}
        loading={'lazy'}
      />
    </picture>
  );
};

export default Thumbnail;