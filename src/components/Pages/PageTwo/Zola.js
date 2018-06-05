import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  poem: {
  }
});

const zola = props => {
  const { classes } = props;

  return (
    <div className={classes.poem}>
      <Typography
        variant="headline"
        align="center"
        style={{ color: '#9d9d9d' }}
      >
        <p>
          <br />
          <br />
          <br />
          <br />
          Le ciel et le cul,<br />
          les deux grands leviers.
          <br />
          <br />
          <br />
          <br />
        </p>
      </Typography>
      <Typography variant="body1" align="right" style={{ color: '#FFFFFF' }}>
        Emile Zola
      </Typography>
    </div>
  );
};

zola.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(zola);
