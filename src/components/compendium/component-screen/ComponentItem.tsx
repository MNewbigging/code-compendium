import { Card } from '@blueprintjs/core';
import React from 'react';

import './component-item.scss';

export interface ComponentItemProps {
  title: string;
  preview: JSX.Element;
  html: string;
  sass: string;
}

interface Props extends ComponentItemProps {
  onClick: () => void;
}

export class ComponentItem extends React.Component<Props> {
  public render() {
    const { title, preview, onClick } = this.props;

    return (
      <Card className={'component-item'} interactive onClick={() => onClick()}>
        <div className={'title'}>{title}</div>
        <div className={'preview'}>{preview}</div>
      </Card>
    );
  }
}
