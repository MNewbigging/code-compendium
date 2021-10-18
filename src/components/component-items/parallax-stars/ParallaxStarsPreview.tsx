import React from 'react';

import './parallax-stars.scss';

export const ParallaxStarsPreview: React.FC = () => {
  return (
    <div className={'background'}>
      <div className={'stars-small'}></div>
      <div className={'stars-small red'}></div>
      <div className={'stars-small blue'}></div>
      <div className={'stars-med'}></div>
      <div className={'stars-med red'}></div>
      <div className={'stars-med blue'}></div>
      <div className={'stars-large'}></div>
      <div className={'stars-large red'}></div>
      <div className={'stars-large blue'}></div>
    </div>
  );
};
