import React from 'react';
import { connect } from 'react-redux';
import { validateEaster, incrementAlert } from '../../actions/easters';

import PropTypes from 'prop-types';
import { withStyles, Grid, Typography, Button } from '@material-ui/core';
import { Phone, Mail } from '@material-ui/icons';

import heartImg from '../../assets/imgs/heartbeat.png';
import heartbeatsImg from '../../assets/imgs/heartbeatAnimation.gif';

const styles = theme => ({
  grid: {
    margin: '0 auto',
    padding: '40px 24px'
  },
  contactBtn: {
    margin: '15px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const PageFive = props => {
  const { classes, easters, validateEaster, incrementAlert } = props;

  let clickCounter = 0;
  let timeOutClicker = null;
  const handleClick = () => {
    if (!easters.love) {
      clickCounter++;
      if (clickCounter >= 5) {
        clearTimeout(timeOutClicker);
        validateEaster('love');
        incrementAlert();
      } else {
        if (!timeOutClicker) {
          setTimeout(() => {
            clickCounter = 0;
          }, 2000);
        }
      }
    }
  };

  return (
    <Grid item xs={12} sm={8} md={6} className={classes.grid}>
      <Typography variant="display3" align="left" gutterBottom>
        04 - MAKE IT BEAT
      </Typography>
      {!easters.love ? (
        <img
          src={heartImg}
          width={340}
          height={300}
          onClick={handleClick}
          alt="heart"
        />
      ) : (
        <div>
          <img
            src={heartbeatsImg}
            width={340}
            height={300}
            alt="heart beatin"
            credit="https://campushippo.com/lessons/how-to-animate-a-heartbeat-with-css-and-svg-10918291a"
          />
          <Typography variant="display1" align="center">
            LETS KEEP IT SIMPLE
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            {'Made with <3 for fun'}
          </Typography>
          <Button
            className={classes.contactBtn}
            variant="raised"
            color="primary"
            href="mailto:pierre.aurele.martin@gmail.com"
          >
            Mail
            <Mail className={classes.rightIcon} />
          </Button>
          <Button
            className={classes.contactBtn}
            variant="raised"
            color="primary"
            href="tel:+33698967166"
          >
            Phone
            <Phone className={classes.rightIcon} />
          </Button>
        </div>
      )}
    </Grid>
  );
};

PageFive.propTypes = {
  classes: PropTypes.object.isRequired,
  validateEaster: PropTypes.func.isRequired,
  incrementAlert: PropTypes.func.isRequired,
  easters: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(PageFive)
);
