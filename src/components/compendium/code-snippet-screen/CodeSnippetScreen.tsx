import React from 'react';

import { CodeSnippetItem } from './CodeSnippetItem';
import { randomIdProps } from '../../code-snippet-items/RandomId';

import './code-snippet-screen.scss';

export class CodeSnippetScreen extends React.Component {
  public render() {
    return (
      <div className={'code-snippet-screen'}>
        <div className={'code-snippet-items-list'}>
          <CodeSnippetItem {...randomIdProps} />
          <CodeSnippetItem {...randomIdProps} />
        </div>
      </div>
    );
  }
}
