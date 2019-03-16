import React, { Component } from 'react';
import Header from '../Header';
import DashContent from '../DashContent';
import Recruitment from '../Recruitment';
import {dashboardContent} from '../../data/dashboardData';


class Dashboard extends Component {

  render() {
    const dc = dashboardContent;

    return (
      <div className='main-content'>
        <Header title={dc.pageTitle} subtitle={dc.pageSubtitle} />

        <DashContent />

        <Recruitment />
      </div>



    );
  }

}


export default Dashboard;
