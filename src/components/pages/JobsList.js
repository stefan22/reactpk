import React, { Component } from 'react';
import Header from '../Header';
import Jobs from '../../data/jobs';
import JobsListItem from '../JobListItem';
import '../../scss/components/ApplicantsList.scss';
import {bounce} from '../animationHelpers';
import {jobsPageData} from '../../data/jobsPageData';

class JobsList extends Component {

  componentDidMount() {
    //page,animate,myclass
    bounce('jobs','bounce animated','main-content');
  }

  render() {
    const jobs = Jobs;
    const jd = jobsPageData;
    return (
      <div className='main-content'>
        <Header title={'Jobs List page'} subtitle={'Jobs page subtitle'} />
        <div className="container">

          <h2>{jd.title}</h2>
          <div className='job-legend'>
            <p className="text-left">
              {jd.subtitle}
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
