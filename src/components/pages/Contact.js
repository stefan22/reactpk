import React, { Component } from 'react';
import Header from '../Header';
import TextInputField from '../formElements/TextInputField';
import CheckboxField from '../formElements/CheckboxField';
import SelectField from '../formElements/SelectField';
import {applicantsPageData} from '../../data/contactPageData';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    const co = applicantsPageData.countryOptions;
    this.setState({
      options: co,
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
    const cd = applicantsPageData;
    return (
      <div className='main-content'>
        <Header
          title={cd.pageTitle}
          subtitle={cd.pageSubtitle}
        />

        <div className="container">
          <h2>{cd.title}</h2>
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
              label= {cd.country}
              options={this.state.options}
            />

            <CheckboxField handleOnChange={this.handleOnChange}
              name='checkbox'
              label= {cd.confirm}
            />

            <button type='submit'>{cd.button}</button>
          </form>
        </div>
      </div>

    );
  }

}


export default Contact;
