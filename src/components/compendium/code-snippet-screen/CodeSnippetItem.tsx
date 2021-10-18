import { Button, Card } from '@blueprintjs/core';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
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

@observer
export class CodeSnippetItem extends React.Component<CodeSnippetItemProps> {
  @observable private maximised = false;

  public render() {
    const { title, code } = this.props;

    console.log('max', this.maximised);
    const maximiseClass = this.maximised ? 'maximise' : 'minimise';

    return (
      <Card className={'code-snippet-item ' + maximiseClass}>
        <div className={'title-bar'}>
          <div className={'title'}>{title}</div>
          <div className={'actions'}>
            <Button icon={this.maximised ? 'minimize' : 'maximize'} onClick={this.toggleSize} />
          </div>
        </div>
        <div className={'code-area'}>
          <SyntaxHighlighter language={'typescript'} style={tomorrowNightEighties}>
            {code}
          </SyntaxHighlighter>
        </div>
      </Card>
    );
  }

  private toggleSize = () => {
    this.maximised = !this.maximised;
  };
}
