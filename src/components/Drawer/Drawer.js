import React from 'react';
import PropTypes from 'prop-types';
import { Link, Events } from 'react-scroll';

import {
  withStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = theme => ({
  listParent: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '0 15px'
  }
});

const DrawerContainer = props => {
  const { classes } = props;

  Events.scrollEvent.register('end', function(to, element) {
    props.toggle();
  });

  return (
    <SwipeableDrawer
      open={props.open}
      onClose={props.toggle}
      onOpen={props.toggle}
    >
      <div className={classes.listParent}>
        <List component="nav">
          <Link
            activeClass="active"
            to="pageone"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            <ListItem button>
              <ListItemText primary="👋 Home" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="pagetwo"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            <ListItem button>
              <ListItemText primary="🎶 Zola's hommage" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="pagethree"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            <ListItem button>
              <ListItemText primary="👨‍💻 in Emojis" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="pagefour"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            <ListItem button>
              <ListItemText primary="🥂 Tchin-tchin" />
            </ListItem>
          </Link>
          <Link
            activeClass="active"
            to="pagefive"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            <ListItem button>
              <ListItemText primary="💗 Heartbeat" />
            </ListItem>
          </Link>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

DrawerContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerContainer);
