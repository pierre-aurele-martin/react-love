import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateEaster, incrementAlert } from '../../actions/easters';
import { Element } from 'react-scroll';

import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';

import ViewL from '../../hoc/ViewLoadable';

import PageOne from '../Pages/PageOne';
import EasterFab from '../../components/Easter/EasterFab';

const AsyncPageTwo = ViewL({
  loader: () => import('../Pages/PageTwo')
});

const AsyncPageThree = ViewL({
  loader: () => import('../Pages/PageThree')
});

const AsyncPageFour = ViewL({
  loader: () => import('../Pages/PageFour')
});

const AsyncPageFive = ViewL({
  loader: () => import('../Pages/PageFive')
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5rem 0'
  },
  element: {
    width: '100%'
  }
});

class Layout extends Component {
  componentDidMount() {
    const { validateEaster, incrementAlert, easters } = this.props;

    if (!easters.home) {
      //Dispathing even when console is opened
      var devtools = /./;
      devtools.toString = () => {
        validateEaster('home');
        incrementAlert();
      };
      //This is mandatory to bind console opening
      console.log('%c', devtools);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Element name="pageone" className={classes.element}>
            <PageOne />
          </Element>
          <Element name="pagetwo" className={classes.element}>
            <AsyncPageTwo />
          </Element>
          <Element name="pagethree" className={classes.element}>
            <AsyncPageThree />
          </Element>
          <Element name="pagefour" className={classes.element}>
            <AsyncPageFour />
          </Element>
          <Element name="pagefive" className={classes.element}>
            <AsyncPageFive />
          </Element>
        </Grid>
        <EasterFab />
      </div>
    );
  }
}

Layout.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Layout));
