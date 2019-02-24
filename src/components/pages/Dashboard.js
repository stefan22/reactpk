import React, { Component } from 'react';
import Header from '../Header';


class Dashboard extends Component {

  render() {
    console.log(this);
    return (
      <div className='main-content'>
        <Header title={'Rec Dashboard'} subtitle={'Here, I Check All my Stats, and decide who goes where and does this or that'} />

        <div className="container">

          <h2>Rec Stats</h2>
          <div>
            <p className="text-left">
              Jobs list page has at the moment a list of 'jobs', parsed from local
              folder data > jobs.js</p>
            <p className="text-left">
              Applicants list page at the moment has another list (of users) fetched from typicode Fake Rest API.
            </p>
            <p className="text-left">
              Contact page added a form.
            </p>
            <p className="text-left">
              Consequat lorem sollicitudin fames suscipit, tristique tempor egestas tortor nisl. Mollis
              hendrerit consectetur facilisis tincidunt ipsum ut ultricies pulvinar est convallis. Augue
              quisque varius praesent. Convallis lacinia nunc et cursus sit sagittis pellentesque purus
              viverra. Ridiculus ligula fusce natoque per neque metus natoque habitasse tincidunt tempus quam
              potenti! Nostra euismod tortor venenatis lorem laoreet lacinia ante congue potenti enim
              sollicitudin. Tincidunt, ac taciti felis et curabitur phasellus vestibulum commodo dictum
              adipiscing cursus. Netus vehicula eros.
            </p>
          </div>

        </div>
      </div>

    );
  }

}


export default Dashboard;
