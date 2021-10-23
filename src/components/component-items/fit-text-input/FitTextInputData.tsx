import React from 'react';
import { ComponentItemProps } from '../../compendium/component-screen/ComponentItem';
import { FitTextInputPreview } from './FitTextInputPreview';

const fitTextInputHtml = `import { observer } from 'mobx-react';
import React from 'react';

import './fit-text-input.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
  inputFieldPadding: number;
}

@observer
export class FitTextInputPreview extends React.Component<Props> {
  private nameInputRef = React.createRef<HTMLInputElement>();
  private hiddenNameRef = React.createRef<HTMLSpanElement>();

  componentDidMount() {
    this.resizeInput();
  }

  public render() {
    const { value } = this.props;

    return (
      <div className={'fit-text-input'}>
        <span ref={this.hiddenNameRef} className={'hidden-name'}>
          {value}
        </span>
        <input ref={this.nameInputRef} autoFocus value={value} onChange={this.onInputChange} />
      </div>
    );
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // On change prop callback first
    this.props.onChange(e.target.value);

    // Then update hidden text with value
    this.hiddenNameRef.current.textContent = e.target.value;

    // Then resize input
    this.resizeInput();
  };

  private resizeInput = () => {
    const { inputFieldPadding } = this.props;

    if (this.hiddenNameRef.current && this.nameInputRef.current) {
      const width = this.hiddenNameRef.current.offsetWidth + inputFieldPadding * 2 + 'px';
      this.nameInputRef.current.style.width = width;
    }
  };
}
`;

const fitTextInputScss = `.hidden-name {
  position: absolute;
  height: 0px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  white-space: pre;
}
`;

export const fitTextInputItemProps: ComponentItemProps = {
  title: 'Fit text input',
  preview: <FitTextInputPreview />,
  html: fitTextInputHtml,
  scss: fitTextInputScss,
};
