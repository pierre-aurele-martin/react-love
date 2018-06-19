import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';

import image from '../../assets/imgs/PageFour.jpg';

const styles = theme => ({
  grid: {
    margin: '0 auto',
    padding: '2.5rem 0'
  },
  img: {
    width: '100%',
    maxWidth: '100%'
  }
});

const PageFour = props => {
  const { classes } = props;

  return (
    <div>
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        className={classes.grid}
        style={{ paddingBottom: 0 }}
      >
        <Typography
          variant="display3"
          align="left"
          style={{ paddingLeft: '1.5rem' }}
        >
          {'03 - ME WITH 🍷 = <3'}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <img className={classes.img} src={image} alt="this is me" />
      </Grid>
    </div>
  );
};

PageFour.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageFour);
