import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography, TextField } from '@material-ui/core';

const styles = theme => ({
  poem: {},
  clue: {
    color: '#FFFFFF'
  }
});

const yeats = props => {
  const { classes } = props;

  return (
    <div className={classes.poem}>
      <Typography
        variant="display3"
        align="left"
        gutterBottom
        style={{ color: '#FFFFFF' }}
      >
        01 - POETRY IS ALWAYS A GOOD START
      </Typography>
      <Typography
        variant="headline"
        align="center"
        style={{ color: '#9d9d9d' }}
      >
        <p>
          H<span className={classes.clue}>a</span>d I the heaven
          <span className={classes.clue}>s</span>' embroidered cloth
          <span className={classes.clue}>s</span>,<br />
          Enwrought with golden and silver light, <br />
          The blue and the dim and the dark cloths <br />
          Of night and light and the half-light, <br />
          I would spread the cloths under your feet: <br />
          But I, being poor, have only my dreams;
        </p>
        <TextField
          id="for-mobile"
          fullWidth
        />

        <p>
          I h<span className={classes.clue}>a</span>ve
          <span className={classes.clue}>s</span>pread my dream
          <span className={classes.clue}>s</span> under your feet; <br />
          Tre<span className={classes.clue}>a</span>d softly becau
          <span className={classes.clue}>s</span>e you tread on my dream
          <span className={classes.clue}>s</span>.
        </p>
      </Typography>
      <Typography variant="body1" align="right" style={{ color: '#FFFFFF' }}>
        William Butler Yeats
      </Typography>
    </div>
  );
};

yeats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(yeats);
