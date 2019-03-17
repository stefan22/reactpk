import React, { Component } from 'react';


class JobSingleTest extends Component {

  render() {
    console.log(this);
    const {id,company,location,salary,title} = this.props;
    return (
      <div>
        <ul>
          <li>Id: {id}</li>
          <li>Company: {company}</li>
          <li>Location: {location}</li>
          <li>Salary: {salary}</li>
          <li>Title: {title}</li>
        </ul>
      </div>
    );

  }
}


export default JobSingleTest;

