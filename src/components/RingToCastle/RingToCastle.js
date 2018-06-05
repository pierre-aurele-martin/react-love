import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Emoji from '../Emoji/Emoji';

import { withStyles } from '@material-ui/core';

const styles = {
  flex: {
    flex: 1,
    position: 'relative'
  }
};

const RingToCastle = props => {
  const { classes, easters } = props;

  let validEaster = 0;

  for (var easter in easters) {
    if (easters[easter]) {
      validEaster = validEaster + 9.5;
    }
  }

  return (
    <div className={classes.flex}>
      <Emoji
        styles={{
          position: 'absolute',
          bottom: '-15px',
          left: validEaster + '%'
        }}
        emoji="💃🏻"
        fontSize="25px"
        label="dancer girl"
      />
      <Emoji
        styles={{
          position: 'absolute',
          bottom: '-15px',
          right: validEaster + '%'
        }}
        emoji="🕺🏻"
        fontSize="25px"
        label="dancer man"
      />
    </div>
  );
};

RingToCastle.propTypes = {
  classes: PropTypes.object.isRequired,
  easters: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { easters } = state;
  return { easters };
};

export default connect(mapStateToProps)(withStyles(styles)(RingToCastle));
