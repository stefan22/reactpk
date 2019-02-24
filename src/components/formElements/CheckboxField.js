import React from 'react';

class CheckboxField extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(e) {
    let obj = {};
    let val = e.target.form[3].checked;
    if(val=== true) {
      val = false;
      e.target.form[3].checked = false;
    }else if(val === false) {
      val= true;
      e.target.form[3].checked = true;
    }
    obj.pass = e.currentTarget.type;
    obj.name = val;
    this.props.handleOnChange(obj);
  }

  render() {

    const { label, name, value } = this.props;
    return (
      <div className="checkbox-field">
        <input
          type="checkbox"
          value={value}
          name={name}
          checked
          id={name}
          onChange={this.handleCheckbox}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}


export default CheckboxField;
