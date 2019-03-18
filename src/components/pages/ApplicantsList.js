import React, {Component} from 'react';
import MultiList from '../MultiList';
import UserItem from '../UserItem';
import Header from '../Header';
import '../../scss/components/ApplicantsList.scss';
import {bounce} from '../animationHelpers';
import {applicantsPageData} from '../../data/applicantsPageData';

const API = 'https://jsonplaceholder.typicode.com/users';

class ApplicantsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [],
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    //page,animate,myclass
    bounce('applicants','bounce animated','main-content');
  }

  getUsers = () => {
    fetch(API).then(res => res.json())
      .then(data => {
        return this.setState({
          applicants: data,
      });
    });
  }

  render() {
    let {applicants} =  this.state;
    const {pageTitle,pageSubtitle,title,subtitle}= applicantsPageData;

    return (
      <div className='main-content'>
        <Header
          title={pageTitle}
          subtitle={pageSubtitle}
        />

        <div className='container'>
          <h2>{title}</h2>
          <div className='job-legend'>
            <p className="text-left">
              {subtitle}
            </p>
          </div>
          <div className='applicants'>
          {!!applicants &&

            <MultiList
              items={applicants}
              itemElement={UserItem} />
          }
          </div>
       </div>

      </div>
    );
  }

}


export default ApplicantsList;
