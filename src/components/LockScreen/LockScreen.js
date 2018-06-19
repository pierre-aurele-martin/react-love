/* Could definetly split this one but find it interesting to have a  */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Konami from 'react-konami';

import LockArrowKeys from './LockArrowKeys';

import { withStyles, Grid, Button, TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '1000%',
    background: '#000',
    zIndex: 1500
  },
  gridItem: {
    margin: 'auto',
    marginTop: '50vh',
    transform: 'translateY(-50%)'
  },
  lockInput: {
    backgroundColor: 'white',
    border: '1px solid white',
    fontSize: '1rem',
    padding: '0.75rem',
    width: 'calc(100% - 1.5rem)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: 'white',
      boxShadow: '0 0 0 0.2rem rgba(255,255,255,.25)'
    }
  },
  lockFormLabel: {
    top: '-1rem',
    fontSize: '2rem',
    color: 'white',
    '&:focus': {
      color: 'white'
    }
  },
  lockButton: {
    color: 'white',
    fontSize: '1rem',
    border: '1px solid white',
    marginTop: '1rem'
  }
});

class LockScreen extends Component {
  state = {
    konamiInput: '',
    konami: [38, 38, 40, 40, 37, 39, 37, 39],
    btnPressed: {
      ArrowDown: false,
      ArrowUp: false,
      ArrowLeft: false,
      ArrowRight: false
    },
    btnIndex: {
      ArrowDown: 40,
      ArrowUp: 38,
      ArrowLeft: 37,
      ArrowRight: 39
    }
  };

  timeOutTransition = null;

  componentWillMount() {
    document.addEventListener('keydown', this.keyEventListener, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyEventListener, true);
    clearTimeout(this.timeOutTransition);
  }

  keyEventListener = e => {
    e = e || window.event;
    const code = e.code;
    
    if (this.state.btnIndex[code]) {
      this.handleInput(code);
    }
    e.preventDefault();
  };

  handleBtn = (code) => {
    this.handleInput(code);
  }

  handleInput(code) {
    this.keyDownTransition(code);
    const newValue =
      this.state.konamiInput + this.state.btnIndex[code].toString();

    this.setState({
      konamiInput: newValue
    });

    if (newValue === this.state.konami.join('')) {
      this.props.toggle();
    } else if (newValue.length > this.state.konami.length * 2) {
      this.setState({ konamiInput: '' });
    }
  }

  keyDownTransition(key) {
    /* Doesnt work when coming from handleBtn for some reason... */

    const newPress = { ...this.state.btnPressed };
    newPress[key] = true;
    this.setState({ btnPressed: newPress });

    this.timeOutTransition = setTimeout(() => {
      newPress[key] = false;
      this.setState({ btnPressed: newPress });
    }, 175);
  }

  handleInputChange = e => {
    this.setState({ konamiInput: e.target.value });
  };

  render() {
    const { classes, toggle } = this.props;

    return (
      <div className={classes.root}>
        <Konami easterEgg={toggle} konami={this.state.konami} />
        <Grid container spacing={24}>
          <Grid item xs={8} className={classes.gridItem}>
            <TextField
              id="password-input"
              label="KONAMI CODE"
              type="password"
              margin="normal"
              fullWidth
              value={this.state.konamiInput}
              onChange={this.handleInputChange}
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.lockInput
                }
              }}
              InputLabelProps={{
                shrink: true,
                className: classes.lockFormLabel
              }}
            />

            <LockArrowKeys 
              handleBtn={this.handleBtn}
              btnPressed={this.state.btnPressed}              
            />

            <Button onClick={toggle} className={classes.lockButton} fullWidth>
              NOT FUN
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LockScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default withStyles(styles)(LockScreen);
