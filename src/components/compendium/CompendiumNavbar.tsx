import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React from 'react';

import { CompendiumScreen, CompendiumState } from '../../state/CompendiumState';

interface Props {
  appState: CompendiumState;
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
            onClick={() => appState.toScreen(CompendiumScreen.COMPONENTS)}
            outlined={appState.screen === CompendiumScreen.COMPONENTS}
          />
          <Button
            icon={'code-block'}
            text={'Code snippets'}
            minimal
            onClick={() => appState.toScreen(CompendiumScreen.CODE)}
            outlined={appState.screen === CompendiumScreen.CODE}
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}
