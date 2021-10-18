import React from 'react';

import { CodeSnippetItem } from './CodeSnippetItem';
import { randomIdProps } from '../../code-snippet-items/RandomId';
import { CompendiumState } from '../../../state/CompendiumState';

import './code-snippet-screen.scss';

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
        </div>
      </div>
    );
  }
}
