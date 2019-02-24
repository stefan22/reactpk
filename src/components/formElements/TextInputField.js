import React from 'react';

class TextInputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleOnBlur() {
    console.log('blur')
  }

  handleFocus() {
    console.log('focus')
  }

  handleOnChangeInput(e) {

    let obj = {};
    obj.name = e.target.value;
    if (e.currentTarget.name === 'first-name') {
      obj.pass = 'first-name';
    }
    if (e.currentTarget.name === 'last-name') {
      obj.pass = 'last-name';
    }

    if(obj.name.length > 3) {
      this.props.handleOnChange(obj);
    }

  }

  render() {
    const {label, name, value, required, type = 'text'} = this.props;

    return (
      <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          className="input-field__text-input"
          required={required}
          onChange={this.handleOnChangeInput}
          onBlur={this.handleOnBlur}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}



export default TextInputField;
