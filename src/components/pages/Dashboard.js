import React, { Component } from 'react';
import Header from '../Header';
import DashContent from '../DashContent';
import Recruitment from '../Recruitment';


class Dashboard extends Component {


  render() {
    const title = 'Rec Dashboard';
    const subtitle = 'Here, I Check All my Stats, and decide who goes where and does this or that'
    console.log(this);
    return (
      <div className='main-content'>
        <Header title={title} subtitle={subtitle} />

        <DashContent />

        <Recruitment />
      </div>



    );
  }

}


export default Dashboard;
