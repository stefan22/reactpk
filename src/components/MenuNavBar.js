import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import '../scss/components/MenuNavBar.scss';


const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuNavBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className='menu-root'>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className='menu-list'>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/' activeClassName='is-active' exact={true} >
                  Home
                </NavLink>
              </Typography>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/jobs' activeClassName='is-active' >
                  Jobs list
                </NavLink>
              </Typography>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/applicants' activeClassName='is-active' >
                  Applicants list
                </NavLink>
              </Typography>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/contact' activeClassName='is-active' >
                  Contact
                </NavLink>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuNavBar);
