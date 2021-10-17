import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from '../../state/AppState';
import { CompendiumNavbar } from './CompendiumNavbar';

import './compendium.scss';

@observer
export class Compendium extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={'compendium'}>
        <div className={'navbar-area'}>
          <CompendiumNavbar />
        </div>
        <div className={'content-area'}></div>
      </div>
    );
  }
}
