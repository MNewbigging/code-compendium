import { observer } from 'mobx-react';
import React from 'react';

import { CompendiumScreen, CompendiumState } from '../../state/CompendiumState';
import { CompendiumNavbar } from './CompendiumNavbar';
import { ComponentScreen } from './component-screen/ComponentScreen';
import { CodeSnippetScreen } from './code-snippet-screen/CodeSnippetScreen';

import './compendium.scss';

@observer
export class Compendium extends React.PureComponent {
  private readonly appState = new CompendiumState();
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
      case CompendiumScreen.COMPONENTS:
        return <ComponentScreen compendiumState={this.appState} />;

      case CompendiumScreen.CODE:
        return <CodeSnippetScreen compendiumState={this.appState} />;
    }
  }
}
