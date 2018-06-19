import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Grid, Button } from '@material-ui/core';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';

const styles = theme => ({
  arrowButton: {
    border: '1px solid white'
  },
  arrowButtonTransition: {
    transition: 'background-color 0.15s ease',
    backgroundColor: 'white'
  },
  arrowIcon: {
    fontSize: '2.5rem',
    color: 'white'
  }
});

const LockArrowKeys = props => {
  const { classes, btnPressed, handleBtn } = props;

  return (
    <Grid item xs={12} style={{ marginTop: '1rem' }}>
      <div style={{ margin: 'auto' }}>
        <Button
          className={[
            classes.arrowButton,
            btnPressed.ArrowUp ? classes.arrowButtonTransition : null
          ].join(' ')}
          onClick={() => handleBtn('ArrowUp')}
        >
          <KeyboardArrowUp className={classes.arrowIcon} />
        </Button>
      </div>
      <div style={{ float: 'right', width: '33.33%' }}>
        <Button
          className={[
            classes.arrowButton,
            btnPressed.ArrowRight ? classes.arrowButtonTransition : null
          ].join(' ')}
          onClick={() => handleBtn('ArrowRight')}
        >
          <KeyboardArrowRight className={classes.arrowIcon} />
        </Button>
      </div>
      <div style={{ float: 'right', width: '33.33%' }}>
        <Button
          className={[
            classes.arrowButton,
            btnPressed.ArrowDown ? classes.arrowButtonTransition : null
          ].join(' ')}
          onClick={() => handleBtn('ArrowDown')}
        >
          <KeyboardArrowDown className={classes.arrowIcon} />
        </Button>
      </div>
      <div style={{ float: 'right', width: '33.33%' }}>
        <Button
          className={[
            classes.arrowButton,
            btnPressed.ArrowLeft ? classes.arrowButtonTransition : null
          ].join(' ')}
          onClick={() => handleBtn('ArrowLeft')}
        >
          <KeyboardArrowLeft className={classes.arrowIcon} />
        </Button>
      </div>
    </Grid>
  );
};

LockArrowKeys.propTypes = {
  classes: PropTypes.object.isRequired,
  btnPressed: PropTypes.object.isRequired,
  handleBtn: PropTypes.func.isRequired
};

export default withStyles(styles)(LockArrowKeys);
