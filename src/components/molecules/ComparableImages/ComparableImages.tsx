import React, { FC, RefObject, useRef, useCallback, useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ComparableImages.styles';

type Props = {
  aspectRatio?: string;
  leftSrc?: string;
  rightSrc?: string;
  startBarPosition?: number;
}

const FIXED_X = -16;

export const ComparableImages: FC<Props> = ({
  aspectRatio = '16 / 8',
  leftSrc,
  rightSrc,
  startBarPosition = 0
}) => {
  const wrapperRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const width = wrapperRef.current?.clientWidth ?? 0;
    const startBarPositionAsPx = (width) * (startBarPosition / 100);
    setBarPosition(startBarPositionAsPx);
  }, [startBarPosition, wrapperRef]);

  const [barPosition, setBarPosition] = useState(0);
  const [shouldSlide, setShouldSlide] = useState(false);

  const startSlideMode = useCallback((e: React.MouseEvent) => {
    setShouldSlide(true);
    setBarPosition(e.clientX + FIXED_X);
  }, [setShouldSlide]);

  const endSlideMode = useCallback((e: React.MouseEvent) => {
    setShouldSlide(false);
  }, [setShouldSlide]);

  const slideBar = useCallback((e: React.MouseEvent) => {
    if(!shouldSlide) return;
    setBarPosition((currentX) => currentX + e.movementX);
  }, [shouldSlide]); 

  return (
    <div
      ref={wrapperRef}
      css={styles.wrapper(aspectRatio)}
      onMouseDown={startSlideMode}
      onMouseMove={slideBar}
      onMouseUp={endSlideMode}
      onMouseLeave={endSlideMode}
    >
      {leftSrc ? (
        <div
          css={styles.leftWrapper}
          style={{
            clip: `rect(auto, ${barPosition}px, auto, auto)`,
          }}
        >
          <div css={styles.imageWrapper(aspectRatio)}>
            <Image
              src={leftSrc}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </div>
      ): null}
      {rightSrc ? (
        <div
          css={styles.rightWrapper}
          style={{
            clip: `rect(auto, auto, auto, ${barPosition}px)`,
          }}
        >
          <div css={styles.imageWrapper(aspectRatio)}>
            <Image
              src={rightSrc}
              layout='fill'
              objectFit={'cover'}
              objectPosition='center'
            />
          </div>
        </div>
      ): null}
      <div
        css={styles.bar}
        style={{
          left: barPosition - 2
        }}
      />
    </div>
  );
};

export default ComparableImages;