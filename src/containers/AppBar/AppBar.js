import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LockScreen from '../../components/LockScreen/LockScreen';
import Drawer from '../../components/Drawer/Drawer';
import RingToCastle from '../../components/RingToCastle/RingToCastle';

import { withStyles, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu, Lock, LockOpen } from '@material-ui/icons';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class AppBarContainer extends Component {
  state = {
    locked: false,
    drawerOpen: false
  };

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  toggleLockScreen() {
    this.setState({ locked: !this.state.locked });
  }

  render() {
    const { classes } = this.props;

    const lockscreen = this.state.locked ? (
      <LockScreen
        visible={this.state.locked}
        toggle={() => this.toggleLockScreen()}
      />
    ) : (
      ''
    );

    return (
      <React.Fragment>
        {lockscreen}
        <Drawer
          toggle={() => this.toggleDrawer()}
          open={this.state.drawerOpen}
        />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleDrawer()}
            >
              <Menu />
            </IconButton>
            <RingToCastle />
              <IconButton
                color="inherit"
                aria-label="Lock"
                onClick={() => this.toggleLockScreen()}
              >
                {this.state.locked ? <Lock /> : <LockOpen />}
              </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

AppBarContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarContainer);
