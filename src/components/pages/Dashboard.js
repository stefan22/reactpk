import React, { Component } from 'react';
import Header from '../Header';
import DashContent from '../DashContent';
import Recruitment from '../Recruitment';
import {dashboardContent} from '../../data/dashboardData';


class Dashboard extends Component {

  render() {
    const {pageTitle,pageSubtitle} = dashboardContent;

    return (
      <div className='main-content'>
        <Header title={pageTitle} subtitle={pageSubtitle} />
        <DashContent />

        <Recruitment />
      </div>



    );
  }

}


export default Dashboard;
