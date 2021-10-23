import React from 'react';

import { ComponentItem } from './ComponentItem';
import { ComponentItemDialog } from './ComponentItemDialog';
import { CompendiumState } from '../../../state/CompendiumState';
import { scifiButtonItemProps } from '../../component-items/scifi-buttons/ScifiButtonsData';
import { parallaxStarsItemProps } from '../../component-items/parallax-stars/ParallaxStarsData';
import { fitTextInputItemProps } from '../../component-items/fit-text-input/FitTextInputData';

import './component-screen.scss';

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
          <ComponentItem
            {...fitTextInputItemProps}
            onClick={() => compendiumState.openComponentDialog(fitTextInputItemProps)}
          />
        </div>
      </div>
    );
  }
}
