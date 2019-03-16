import React, {Component} from 'react';
import UserItem from '../UserItem';
import Header from '../Header';
import '../../scss/components/ApplicantsList.scss';
import {bounce} from '../animationHelpers';

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
      .then((data) => {
        return this.setState({
          applicants: data,
        });
      });

  }

  render() {
    console.log(this);
    let {applicants} =  this.state;

    return (
      <div className='main-content'>
        <Header
          title={'Applicants List'}
          subtitle={'A subtitle for Applicants list '}
        />

        <div className='container'>
          <h2>My Applicants</h2>
          <div className='job-legend'>
            <p className="text-left">
              By Id, Name, Street, Phone, Email, Website, City, Business, and catchPhrase
            </p>
          </div>
          <div className='applicants'>
        {
         !!applicants &&
          applicants.map((ap,idx) => {
            return (
              <UserItem
                key={idx} seckey={ap.id}
                id={ap.id}
                name={ap.name}
                email={ap.email}
                phone={ap.phone}
                website={ap.website}
                street={ap.address.street}
                city={ap.address.city}
                business={ap.company.bs}
                catchPhrase={ap.company.catchPhrase}
              />
            )})
        }
          </div>
       </div>

      </div>
    );
  }

}


export default ApplicantsList;
