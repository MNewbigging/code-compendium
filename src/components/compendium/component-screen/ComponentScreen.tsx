import React from 'react';

import { ComponentItem } from './ComponentItem';
import { ComponentItemDialog } from './ComponentItemDialog';
import { CompendiumState } from '../../../state/CompendiumState';
import { scifiButtonItemProps } from '../../component-items/scifi-buttons/ScifiButtonsData';

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
            {...scifiButtonItemProps}
            onClick={() => compendiumState.openComponentDialog(scifiButtonItemProps)}
          />
        </div>
      </div>
    );
  }
}
