import { Card } from '@blueprintjs/core';
import React from 'react';

import './component-item.scss';

interface Props {
  title: string;
  preview: JSX.Element;
}

export class ComponentItem extends React.Component<Props> {
  public render() {
    const { title, preview } = this.props;

    return (
      <Card className={'component-item'} interactive>
        <div className={'title'}>{title}</div>
        <div className={'preview'}>{preview}</div>
      </Card>
    );
  }
}
