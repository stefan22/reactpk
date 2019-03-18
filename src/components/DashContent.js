import React from 'react';
import '../scss/components/Recruitment.scss';
import {dashboardContent} from '../data/dashboardData';

const DashContent = () => {
  const {title,p1,p2,p3,p4} = dashboardContent;
  return (
    <div className='inner-content'>
      <div className="container">
          <h2>{title}</h2>
          <div className='main-dashboard'>
            <p className="text-left">
              {p1}
            </p>
            <p className="text-left">
              {p2}
            </p>
            <p className="text-left">
              {p3}
            </p>
            <p className="text-left">
              {p4}
            </p>
          </div>
        </div>
    </div>
  );

}


export default DashContent;
