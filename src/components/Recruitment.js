import React, {Component} from 'react';
import '../scss/components/Recruitment.scss';
import {recruitmentData} from '../data/recruitmentData';


class Recruitment extends Component {
  render () {
    const rd = recruitmentData;
    return (
      <div className='banner-wrapper'>
        <div className='full-container blue-blue-gradient'>
          <div className='container'>
              <div className='page-banner blue-gradient'>
                <div className='ready text-center'>
                  {rd.bline1}
                </div>
                <h1 className='optimize text-center'>
                  {rd.bline2}
                </h1>
                <div className='ready text-center'>
                  {rd.bline3}
                </div>
              </div>
          </div>
        </div>
      </div>

    );
  }





}


export default Recruitment;
