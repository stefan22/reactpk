import React, { Component } from 'react';
import Header from '../Header';
import Jobs from '../../data/jobs';
import JobsListItem from '../JobListItem';
import '../../scss/components/JobsList.scss';

class JobsList extends Component {
  render() {
    const jobs = Jobs;
    return (
      <div className='main-content'>
        <Header title={'Jobs List page'} subtitle={'jobs page subtitle'} />
        <div className="container">

          <h2>My Jobs</h2>
          <div className='job-legend'>
            <p className="text-left">
              By Id, Title, Salary, Location, and Company.
            </p>
          </div>
          <div className='job-desc'>
          {
            jobs.map((itm,index) => {
              return (
                <JobsListItem key={index}
                {...itm}
                />

              )})
          }




          </div>

        </div>
      </div>

    );
  }

}


export default JobsList;
