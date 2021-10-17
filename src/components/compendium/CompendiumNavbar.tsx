import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React from 'react';

import { AppScreen, AppState } from '../../state/AppState';

interface Props {
  appState: AppState;
}

@observer
export class CompendiumNavbar extends React.Component<Props> {
  public render() {
    const { appState } = this.props;

    return (
      <Navbar>
        <Navbar.Group align={Alignment.CENTER}>
          <Navbar.Heading>Code Compendium</Navbar.Heading>
          <Navbar.Divider />
          <Button
            icon={'cube'}
            text={'Components'}
            minimal
            onClick={() => appState.toScreen(AppScreen.COMPONENTS)}
            outlined={appState.screen === AppScreen.COMPONENTS}
          />
          <Button
            icon={'code-block'}
            text={'Code snippets'}
            minimal
            onClick={() => appState.toScreen(AppScreen.CODE)}
            outlined={appState.screen === AppScreen.CODE}
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}
