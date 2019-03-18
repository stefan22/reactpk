import React, { Component } from 'react';
import Header from '../Header';
import MultiList from '../MultiList';
import Jobs from '../../data/jobs';
import JobListItem from '../JobListItem';
import {bounce} from '../animationHelpers';
import {jobsPageData} from '../../data/jobsPageData';
import '../../scss/components/ApplicantsList.scss';

class JobsList extends Component {
  componentDidMount() {
    //page,animate,myclass
    bounce('jobs','bounce animated','main-content');
  }

  render() {
    const items = Jobs;
    const {pageTitle,pageSubtitle,title,subtitle} = jobsPageData;
    return (
      <div className='main-content'>
        <Header title={pageTitle} subtitle={pageSubtitle} />
        <div className="container">
          <h2>{title}</h2>
          <div className='job-legend'>
            <p className="text-left">{subtitle}</p>
          </div>
          <div className='job-desc'>
            <MultiList items={items} itemElement={JobListItem} />
          </div>
        </div>
      </div>
    );
  }

}


export default JobsList;
