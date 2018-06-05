import React from 'react';
import { connect } from 'react-redux';
import { validateEaster, incrementAlert } from '../../actions/easters';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';

import Emoji from '../../components/Emoji/Emoji';

const styles = theme => ({
  grid: {
    margin: '0 auto',
    padding: '0 24px'
  },
  iFrameContainer: {
    position: 'relative',
    height: 315,
    margin: '15px 0'
  },
  iFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  emoji: {
    fontSize: 50
  }
});

const PageOne = props => {
  const { classes, validateEaster, easters, incrementAlert } = props;

  const easterOne = e => {
    if (!easters.bep) {
      validateEaster('bep');
      incrementAlert();
    }
  };

  let iFrame;
  if (easters.bep) {
    iFrame = (
      <div className={classes.iFrameContainer}>
        <iframe
          title="Travis Scott - goosebumps ft. Kendrick Lamar"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Dst9gZkq1a8?rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={classes.iFrame}
        />
      </div>
    );
  }

  return (
    <Grid item xs={12} sm={8} md={6} className={classes.grid}>
      <Typography variant="display4" align="left">
        Oh hello You,
      </Typography>
      <Typography variant="display2" align="center">
        <p>Here's a simple SPA I'm using as a showcase.</p>
        <p onClick={e => easterOne(e)}>I hope it'll give you goosebumps !</p>
        {iFrame}
        Or make your heart beats !
      </Typography>
      <Emoji
        label="smiling face with heart-shaped eyes"
        fontSize={200}
        emoji="😍"
      />
    </Grid>
  );
};

PageOne.propTypes = {
  classes: PropTypes.object.isRequired,
  validateEaster: PropTypes.func.isRequired,
  easters: PropTypes.object.isRequired,
  incrementAlert: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    validateEaster: easter => dispatch(validateEaster(easter)),
    incrementAlert: () => dispatch(incrementAlert())
  };
};

const mapStateToProps = state => {
  const { easters } = state;
  return { easters };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PageOne));
