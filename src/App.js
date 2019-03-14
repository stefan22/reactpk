import React, { Component } from 'react';
import MenuNavBar from './components/MenuNavBar';
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import JobsList from './components/pages/JobsList';
import Contact from './components/pages/Contact';
import ApplicantsList from './components/pages/ApplicantsList';
import './scss/App.scss';

class App extends Component {


	render() {
    console.log(this);
		return (

         <div className='page-wrapper'>
          <MenuNavBar />
          <div className='main-wrapper'>
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/jobs" component={JobsList} />
              <Route path="/applicants" component={ApplicantsList} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
		);
	}
}


export default App;
