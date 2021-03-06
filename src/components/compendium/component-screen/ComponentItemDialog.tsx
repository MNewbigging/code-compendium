import { Button, Dialog, Icon } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { CompendiumState } from '../../../state/CompendiumState';
import { ComponentItemProps } from './ComponentItem';

import './component-item-dialog.scss';

interface Props {
  compendiumState: CompendiumState;
}

@observer
export class ComponentItemDialog extends React.Component<Props> {
  public render() {
    const { compendiumState } = this.props;

    // Get the selected component props
    const itemProps = compendiumState.componentItemProps;

    const content: JSX.Element = itemProps ? this.getDialogContent(itemProps) : undefined;

    return (
      <Dialog
        className={'component-item-dialog'}
        isOpen={compendiumState.componentDialogOpen}
        canEscapeKeyClose
        canOutsideClickClose
        onClose={compendiumState.closeComponentDialog}
      >
        {content}
      </Dialog>
    );
  }

  private getDialogContent(itemProps: ComponentItemProps) {
    const { compendiumState } = this.props;

    return (
      <div className={'component-dialog-content'}>
        <div className={'preview-container'}>{itemProps.preview}</div>
        <div className={'code-container'}>
          <div className={'html-container'}>
            <div className={'title-bar'}>
              <div className={'title'}>HTML</div>
              <div className={'actions'}>
                <Button
                  icon={'clipboard'}
                  onClick={() => compendiumState.copyToClipboard(itemProps.html)}
                />
              </div>
            </div>
            <SyntaxHighlighter language={'javascript'} style={atomOneDark}>
              {itemProps.html}
            </SyntaxHighlighter>
          </div>

          <div className={'sass-container'}>
            <div className={'title-bar'}>
              <div className={'title'}>SCSS</div>
              <div className={'actions'}>
                <Button
                  icon={'clipboard'}
                  onClick={() => compendiumState.copyToClipboard(itemProps.scss)}
                />
              </div>
            </div>
            <SyntaxHighlighter language={'scss'} style={tomorrowNightEighties}>
              {itemProps.scss}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}
