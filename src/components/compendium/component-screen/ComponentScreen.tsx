import React from 'react';

import { ScifiButtonsPreview } from '../../component-items/scifi-buttons/ScifiButtonsPreview';
import { ComponentItem } from './ComponentItem';
import { ComponentItemDialog } from './ComponentItemDialog';
import { CompendiumState } from '../../../state/CompendiumState';

import './component-screen.scss';

interface Props {
  compendiumState: CompendiumState;
}

export class ComponentScreen extends React.Component<Props> {
  public render() {
    const { compendiumState } = this.props;

    return (
      <div className={'component-screen'}>
        <div className={'component-items-list'}>
          <ComponentItemDialog compendiumState={compendiumState} />

          <ComponentItem
            title={'Sci-fi buttons'}
            preview={<ScifiButtonsPreview />}
            onClick={compendiumState.openComponentDialog}
          />
        </div>
      </div>
    );
  }
}
