import React from 'react';


class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChangeSelect = this.handleOnChangeSelect.bind(this);

  }

  handleOnChangeSelect(e) {

   let obj = {};
   obj.name = e.target.value;
   obj.pass = 'options';

    this.props.handleOnChange(obj);
  }

  render() {
    console.log(this);

  const { label, options, name, value } = this.props;
    return (
      <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {name}
        </label>
        <select
          className="input-field__text-input"
          name={name}
          id={name}
          onChange={this.handleOnChangeSelect}
          value={value}
        >
          {options.map(option =>
            <option
              value={option.value}
              key={option.name}
            >
              {option.name}
            </option>
          )}
        </select>
      </div>
    );
  }
}



export default SelectField;
