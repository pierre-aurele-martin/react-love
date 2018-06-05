import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Konami from 'react-konami';

import { withStyles, Grid, Button, TextField } from '@material-ui/core';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';

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
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: 'white',
      boxShadow: '0 0 0 0.2rem rgba(255,255,255,.25)'
    }
  },
  lockFormLabel: {
    top: '-18px',
    fontSize: 36,
    color: 'white',
    '&:focus': {
      color: 'white'
    }
  },
  lockButton: {
    color: 'white',
    fontSize: '18px',
    border: '1px solid white',
    marginTop: '16px'
  },
  arrowButton: {
    border: '1px solid white'
  },
  arrowButtonTransition: {
    transition: 'background-color 0.15s ease',
    backgroundColor: 'white'
  },
  arrowIcon: {
    fontSize: '36px',
    color: 'white'
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

  handleBtn(code) {
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

            <Grid item xs={12} style={{ marginTop: '16px' }}>
              <div style={{ margin: 'auto' }}>
                <Button
                  className={[
                    classes.arrowButton,
                    this.state.btnPressed.ArrowUp
                      ? classes.arrowButtonTransition
                      : null
                  ].join(' ')}
                  onClick={() => this.handleBtn('ArrowUp')}
                >
                  <KeyboardArrowUp className={classes.arrowIcon} />
                </Button>
              </div>
              <div style={{ float: 'right', width: '33.33%' }}>
                <Button
                  className={[
                    classes.arrowButton,
                    this.state.btnPressed.ArrowRight
                      ? classes.arrowButtonTransition
                      : null
                  ].join(' ')}
                  onClick={() => this.handleBtn('ArrowRight')}
                >
                  <KeyboardArrowRight className={classes.arrowIcon} />
                </Button>
              </div>
              <div style={{ float: 'right', width: '33.33%' }}>
                <Button
                  className={[
                    classes.arrowButton,
                    this.state.btnPressed.ArrowDown
                      ? classes.arrowButtonTransition
                      : null
                  ].join(' ')}
                  onClick={() => this.handleBtn('ArrowDown')}
                >
                  <KeyboardArrowDown className={classes.arrowIcon} />
                </Button>
              </div>
              <div style={{ float: 'right', width: '33.33%' }}>
                <Button
                  className={[
                    classes.arrowButton,
                    this.state.btnPressed.ArrowLeft
                      ? classes.arrowButtonTransition
                      : null
                  ].join(' ')}
                  onClick={() => this.handleBtn('ArrowLeft')}
                >
                  <KeyboardArrowLeft className={classes.arrowIcon} />
                </Button>
              </div>
            </Grid>

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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LockScreen);
