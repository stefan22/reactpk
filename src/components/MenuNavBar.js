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
import {menuNavData} from '../data/menuNavData';


const styles = {
  grow: {
    flexGrow: 1,
  }
};

class MenuNavBar extends Component {

  render() {
    const nvlk = menuNavData;
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
                  {nvlk.navlink1}
                </NavLink>
              </Typography>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/jobs' activeClassName='is-active' >
                {nvlk.navlink2}
                </NavLink>
              </Typography>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/applicants' activeClassName='is-active' >
                {nvlk.navlink3}
                </NavLink>
              </Typography>
              <Typography variant="h5" color="inherit" className={classes.grow}>
                <NavLink to='/contact' activeClassName='is-active' >
                {nvlk.navlink4}
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
