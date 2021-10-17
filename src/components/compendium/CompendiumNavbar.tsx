import { Alignment, Button, Navbar } from '@blueprintjs/core';
import React from 'react';

import './compendium-navbar.scss';

export class CompendiumNavbar extends React.Component {
  public render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.CENTER}>
          <Navbar.Heading>Code Compendium</Navbar.Heading>
          <Navbar.Divider />
          <Button icon={'cube'} text={'Components'} minimal />
          <Button icon={'code-block'} text={'Code snippets'} minimal />
        </Navbar.Group>
      </Navbar>
    );
  }
}
