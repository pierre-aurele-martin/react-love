import React from 'react';
import { connect } from 'react-redux';
import { validateEaster, incrementAlert } from '../../actions/easters';

import PropTypes from 'prop-types';

import {
  withStyles,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import Emoji from '../../components/Emoji/Emoji';

const styles = theme => ({
  grid: {
    margin: '0 auto',
    padding: '2.5rem 1.5rem'
  }
});

const PageThree = props => {
  const { classes, validateEaster, easters, incrementAlert } = props;

  let buttonPressTimer;
  const handleButtonPress = () => {
    if (!easters.link) {
      buttonPressTimer = setTimeout(() => {
        validateEaster('link');
        incrementAlert();
      }, 1500);
    }
  };

  const handleButtonRelease = () => {
    clearTimeout(buttonPressTimer);
  };

  let easterPicto = <Emoji emoji="🏺" label="vase to break" />;
  let easterText = '';
  if (easters.link) {
    easterPicto = <Emoji emoji="🛡" label="you broke the vase" />;
    easterText = '🧝‍ was in the vase !';
  }

  const listContent = {
    noble: {
      name: 'Positive',
      picto: <Emoji emoji="☀️" label="positive" />
    },
    margo: {
      name: 'Learner',
      picto: <Emoji emoji="👨‍🎓" label="learner" />
    },
    transparency: {
      name: 'Team player',
      picto: <Emoji emoji="🥌" label="team player" />
    },
    automation: {
      name: 'Humble',
      picto: <Emoji emoji="🛣" label="humble" />
    }
  };

  return (
    <Grid item xs={12} sm={8} md={6} className={classes.grid}>
      <Typography variant="display3" align="left" gutterBottom>
        02 - ME IN EMOJIS
      </Typography>
      <List component="nav">
        {Object.keys(listContent).map(key => {
          return (
            <ListItem
              button={listContent[key].button ? true : false}
              key={key}
              divider
            >
              <ListItemIcon>{listContent[key].picto}</ListItemIcon>
              <ListItemText
                inset
                primary={listContent[key].name}
                style={{ textAlign: 'center' }}
              />
            </ListItem>
          );
        })}
        <ListItem
          button
          divider
          onTouchStart={handleButtonPress}
          onTouchEnd={handleButtonRelease}
          onMouseDown={handleButtonPress}
          onMouseUp={handleButtonRelease}
        >
          <ListItemIcon>{easterPicto}</ListItemIcon>
          <ListItemText
            inset
            primary={easterText}
            style={{ textAlign: 'center' }}
          />
        </ListItem>
      </List>
    </Grid>
  );
};

PageThree.propTypes = {
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
)(withStyles(styles)(PageThree));
