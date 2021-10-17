import { Dialog } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import React from 'react';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);
hljs.initHighlightingOnLoad();

import 'highlight.js/styles/github.css';
import 'highlight.js/styles/default.css';

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
    const hlHtml = hljs.highlight(itemProps.html, { language: 'xml' }).value;

    return (
      <>
        <div className={'preview-container'}>{itemProps.preview}</div>
        <div className={'html-container'}>
          <pre>
            <code>{itemProps.html}</code>
          </pre>
        </div>
        <div className={'sass-container'}></div>
      </>
    );
  }
}
