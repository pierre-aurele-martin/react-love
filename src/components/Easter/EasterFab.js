import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetAlert } from '../../actions/easters';

import PropTypes from 'prop-types';

import { withStyles, Button, Badge } from '@material-ui/core';

import EasterList from './EasterList';
import Emoji from '../Emoji/Emoji';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '36px',
    right: '36px'
  },
  badge: {
    margin: theme.spacing.unit * 2,
    position: 'fixed',
    bottom: '80px',
    right: '30px'
  }
});

class easterfab extends Component {
  state = {
    listVisible: false
  };

  toggleList = () => {
    this.setState({ listVisible: !this.state.listVisible });
    this.props.resetAlert();
  };

  render() {
    const { classes, easters, eastersAlert} = this.props;

    let fab = <Button
      variant="fab"
      color="primary"
      aria-label="easter egg"
      className={classes.button}
      onClick={this.toggleList}
    >
      <Emoji emoji="🥚" label="discover easter eggs" />
    </Button>;

    let content = fab;
    if (eastersAlert.count > 0){
      content = (
        <Badge className={classes.badge} badgeContent={eastersAlert.count}>
          {fab}
        </Badge>
      );
    }

    return (
      <div>
        <EasterList easters={easters} visible={this.state.listVisible} />
        {content}
      </div>
    );
  }
}

easterfab.propTypes = {
  classes: PropTypes.object.isRequired,
  easters: PropTypes.object.isRequired,
  eastersAlert: PropTypes.object.isRequired,
  resetAlert: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    resetAlert: () => dispatch(resetAlert())
  };
};

const mapStateToProps = state => {
  const { easters, eastersAlert } = state;
  return { easters, eastersAlert };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(easterfab));
