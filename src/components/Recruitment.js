import React, {Component} from 'react';
import '../scss/components/Recruitment.scss';
import {recruitmentData} from '../data/recruitmentData';


class Recruitment extends Component {
  render () {
    const {bline1,bline2,bline3} = recruitmentData;
    return (
      <div className='banner-wrapper'>
        <div className='full-container blue-blue-gradient'>
          <div className='container'>
              <div className='page-banner blue-gradient'>
                <div className='ready text-center'>
                  {bline1}
                </div>
                <h1 className='optimize text-center'>
                  {bline2}
                </h1>
                <div className='ready text-center'>
                  {bline3}
                </div>
              </div>
          </div>
        </div>
      </div>

    );
  }





}


export default Recruitment;
