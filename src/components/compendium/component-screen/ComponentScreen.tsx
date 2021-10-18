import React from 'react';

import { ComponentItem } from './ComponentItem';
import { ComponentItemDialog } from './ComponentItemDialog';
import { CompendiumState } from '../../../state/CompendiumState';
import { scifiButtonItemProps } from '../../component-items/scifi-buttons/ScifiButtonsData';

import './component-screen.scss';
import { parallaxStarsItemProps } from '../../component-items/parallax-stars/ParallaxStarsData';

interface Props {
  compendiumState: CompendiumState;
}

export class ComponentScreen extends React.Component<Props> {
  public render() {
    const { compendiumState } = this.props;

    return (
      <div className={'component-screen'}>
        <ComponentItemDialog compendiumState={compendiumState} />
        <div className={'component-items-list'}>
          <ComponentItem
            {...scifiButtonItemProps}
            onClick={() => compendiumState.openComponentDialog(scifiButtonItemProps)}
          />
          <ComponentItem
            {...parallaxStarsItemProps}
            onClick={() => compendiumState.openComponentDialog(parallaxStarsItemProps)}
          />
        </div>
      </div>
    );
  }
}
