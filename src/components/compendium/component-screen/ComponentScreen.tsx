import React from 'react';

import { ScifiButtonsPreview } from '../../component-items/scifi-buttons/ScifiButtonsPreview';
import { ComponentItem } from './ComponentItem';

import './component-screen.scss';

export class ComponentScreen extends React.Component {
  public render() {
    return (
      <div className={'component-screen'}>
        <div className={'component-items-list'}>
          <ComponentItem title={'Sci-fi buttons'} preview={<ScifiButtonsPreview />} />
        </div>
      </div>
    );
  }
}
