import React, { Component } from 'react';
import Header from '../Header';
import Items from '../../data/jobs';
import '../../scss/components/ApplicantsList.scss';
import {jobsPageData} from '../../data/jobsPageData';



class Testpage extends Component {

  render() {
    const items = Items;
    console.log(this);
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

            list removed

          </div>
        </div>
      </div>

    );
  }

}


export default Testpage;
