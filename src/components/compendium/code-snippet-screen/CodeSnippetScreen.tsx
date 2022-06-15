import './code-snippet-screen.scss';

import React from 'react';

import { CodeSnippetItem } from './CodeSnippetItem';
import { CompendiumState } from '../../../state/CompendiumState';
import { basicKeyboardObserverProps } from '../../code-snippet-items/BasicKeyboardObserver';
import { canvasListenerProps } from '../../code-snippet-items/CanvasListener';
import { enumReverseStrMapProps } from '../../code-snippet-items/EnumReverseStrMap';
import { eventListenerProps } from '../../code-snippet-items/EventListener';
import { mouseListenerProps } from '../../code-snippet-items/MouseListener';
import { randomIdProps } from '../../code-snippet-items/RandomId';
import { vec2Props } from '../../code-snippet-items/Vec2';

interface Props {
  compendiumState: CompendiumState;
}

export class CodeSnippetScreen extends React.Component<Props> {
  public render() {
    const { compendiumState } = this.props;

    return (
      <div className={'code-snippet-screen'}>
        <div className={'code-snippet-items-list'}>
          <CodeSnippetItem
            {...randomIdProps}
            onCopy={() => compendiumState.copyToClipboard(randomIdProps.code)}
          />
          <CodeSnippetItem
            {...enumReverseStrMapProps}
            onCopy={() => compendiumState.copyToClipboard(enumReverseStrMapProps.code)}
          />
          <CodeSnippetItem
            {...basicKeyboardObserverProps}
            onCopy={() => compendiumState.copyToClipboard(basicKeyboardObserverProps.code)}
          />
          <CodeSnippetItem
            {...eventListenerProps}
            onCopy={() => compendiumState.copyToClipboard(eventListenerProps.code)}
          />
          <CodeSnippetItem
            {...mouseListenerProps}
            onCopy={() => compendiumState.copyToClipboard(mouseListenerProps.code)}
          />
          <CodeSnippetItem
            {...canvasListenerProps}
            onCopy={() => compendiumState.copyToClipboard(canvasListenerProps.code)}
          />
          <CodeSnippetItem
            {...vec2Props}
            onCopy={() => compendiumState.copyToClipboard(vec2Props.code)}
          />
        </div>
      </div>
    );
  }
}
