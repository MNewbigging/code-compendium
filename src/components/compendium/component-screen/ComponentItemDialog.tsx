import { Dialog } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React from 'react';
import { CompendiumState } from '../../../state/CompendiumState';

interface Props {
  compendiumState: CompendiumState;
}

@observer
export class ComponentItemDialog extends React.Component<Props> {
  public render() {
    const { compendiumState } = this.props;

    return (
      <Dialog
        isOpen={compendiumState.componentDialogOpen}
        canEscapeKeyClose
        canOutsideClickClose
        onClose={compendiumState.closeComponentDialog}
      ></Dialog>
    );
  }
}
