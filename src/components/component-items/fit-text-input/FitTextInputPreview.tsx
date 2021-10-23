import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

import './fit-text-input.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
  inputFieldPadding: number;
}

@observer
export class FitTextInputPreview extends React.Component {
  private nameInputRef = React.createRef<HTMLInputElement>();
  private hiddenNameRef = React.createRef<HTMLSpanElement>();

  @observable private textValue = 'Fit text input';

  componentDidMount() {
    this.resizeInput();
  }

  public render() {
    return (
      <div className={'fit-text-input'}>
        <span ref={this.hiddenNameRef} className={'hidden-name'}>
          {this.textValue}
        </span>
        <input
          ref={this.nameInputRef}
          value={this.textValue}
          onChange={this.onInputChange}
          onClick={this.onInputClick}
        />
      </div>
    );
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // On change prop callback first
    this.setTextValue(e.target.value);

    // Then update hidden text with value
    this.hiddenNameRef.current.textContent = e.target.value;

    // Then resize input
    this.resizeInput();
  };

  private onInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  private resizeInput = () => {
    if (this.hiddenNameRef.current && this.nameInputRef.current) {
      const width = this.hiddenNameRef.current.offsetWidth + 10 * 2 + 'px';
      this.nameInputRef.current.style.width = width;
    }
  };

  @action private setTextValue(value: string) {
    this.textValue = value;
  }
}
