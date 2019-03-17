import React, { Component } from 'react';
import Header from '../Header';
import Items from '../../data/jobs';
import ListjobsTest from '../ListjobsTest';
import '../../scss/components/ApplicantsList.scss';
import {jobsPageData} from '../../data/jobsPageData';
import JobSingleTest from '../JobSingleTest';

class Testpage extends Component {

  componentDidMount() {

  }

  render() {
    const items = Items;
    const jd = jobsPageData;
    return (
      <div className='main-content'>
        <Header title={jd.pageTitle} subtitle={jd.pageSubtitle} />
        <div className="container">

          <h2>{jd.title}</h2>
          <div className='job-legend'>
            <p className="text-left">
              {jd.subtitle}
            </p>
          </div>
          <div className='job-desc'>

            <ListjobsTest items={items} itemElement={JobSingleTest} />

          </div>
        </div>
      </div>

    );
  }

}


export default Testpage;
