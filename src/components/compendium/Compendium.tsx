import { observer } from 'mobx-react';
import React from 'react';

import { AppScreen, AppState } from '../../state/AppState';
import { CompendiumNavbar } from './CompendiumNavbar';

import './compendium.scss';

@observer
export class Compendium extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={'compendium'}>
        <div className={'navbar-area'}>
          <CompendiumNavbar appState={this.appState} />
        </div>
        <div className={'content-area'}>{this.getScreen()}</div>
      </div>
    );
  }

  private getScreen() {
    switch (this.appState.screen) {
      case AppScreen.COMPONENTS:
        return <div>components</div>;

      case AppScreen.CODE:
        return <div>code</div>;
    }
  }
}
