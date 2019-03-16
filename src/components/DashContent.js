import React from 'react';
import '../scss/components/Recruitment.scss';
import {dashboardContent} from '../data/dashboardData';

const DashContent = () => {
  const db = dashboardContent;
  return (
    <div className='inner-content'>
      <div className="container">
          <h2>{db.title}</h2>
          <div className='main-dashboard'>
            <p className="text-left">
              {db.p1}
            </p>
            <p className="text-left">
              {db.p2}
            </p>
            <p className="text-left">
              {db.p3}
            </p>
            <p className="text-left">
              {db.p4}
            </p>
          </div>
        </div>
    </div>
  );

}


export default DashContent;
