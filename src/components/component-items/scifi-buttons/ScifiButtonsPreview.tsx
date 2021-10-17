import React from 'react';

import './scifi-buttons-preview.scss';

export const ScifiButtonsPreview: React.FC = () => {
  return (
    <div className={'scifi-buttons-preview'}>
      <button className={'scifi-button white'}>WHITE</button>
      <button className={'scifi-button blue'}>BLUE</button>
      <button className={'scifi-button red'}>RED</button>
    </div>
  );
};
