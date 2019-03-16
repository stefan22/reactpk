import React, { Component } from 'react';
import Header from '../Header';
import TextInputField from '../formElements/TextInputField';
import CheckboxField from '../formElements/CheckboxField';
import SelectField from '../formElements/SelectField';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    const countryOptions =[
      {name: 'select-a-country', value:''},
      {name: 'Canada', value:'Canada'},
      {name: 'Japan', value:'Japan'},
      {name: 'Britain', value:'Britain'},
      {name: 'Spain', value:'Spain'},
      {name: 'Colombia', value:'Colombia'}
    ];

    this.setState({
      options: countryOptions,
    });


  }

  handleOnChange(obj) {
    const {options} = this.state;
    if(obj.pass === 'options') {
      options.map(itm => {
        if(itm.value === obj.name) {
          console.log('country selected is: ', obj.name);
        }
      })
    }

    if(obj.pass === 'first-name') {
      console.log('first name entered : ', obj.name);
    }
    if(obj.pass === 'last-name') {
      console.log('last name entered : ', obj.name);
    }
    if(obj.pass === 'checkbox') {
      console.log('checkbox value: ', obj.name);
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log('form submitted');

  }

  render() {


    return (
      <div className='main-content'>
        <Header
          title={'Contact us page'}
          subtitle={'Helping you land your dream job!'}
        />

        <div className="container">
          <h2>Get in Touch!</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <TextInputField handleOnChange={this.handleOnChange}

                name='first-name' label='First Name' />
              </div>
            <div>
              <TextInputField handleOnChange={this.handleOnChange}
                name='last-name' label='Last Name' />
            </div>

            <SelectField handleOnChange={this.handleOnChange}
              name='country'
              label='Select country'
              options={this.state.options}
            />

            <CheckboxField handleOnChange={this.handleOnChange}
              name='checkbox'
              label='Check this box, if you want us to blast you free of charge, and for an entire week non-stop with some amazing spam email.'


            />

            <button type='submit'>Submit</button>
          </form>







        </div>
      </div>

    );
  }

}


export default Contact;
