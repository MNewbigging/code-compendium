import { Card } from '@blueprintjs/core';
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark,
  nightOwl,
  tomorrowNightEighties,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './code-snippet-item.scss';

export interface CodeSnippetItemProps {
  title: string;
  code: string;
}

export class CodeSnippetItem extends React.Component<CodeSnippetItemProps> {
  public render() {
    const { title, code } = this.props;

    return (
      <Card className={'code-snippet-item'}>
        <div className={'title'}>{title}</div>
        <div className={'code-area'}>
          <SyntaxHighlighter language={'typescript'} style={tomorrowNightEighties}>
            {code}
          </SyntaxHighlighter>
        </div>
      </Card>
    );
  }
}
