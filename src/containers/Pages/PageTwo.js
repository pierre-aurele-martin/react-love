import React from 'react';
import { connect } from 'react-redux';
import { validateEaster, incrementAlert } from '../../actions/easters';

import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';
import Konami from 'react-konami';

import Yeats from '../../components/Pages/PageTwo/Yeats';
import Zola from '../../components/Pages/PageTwo/Zola';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: '40px 0'
  },
  grid: {
    margin: '0 auto',
    padding: '12px 24px'
  }
});

const PageTwo = props => {
  const { classes, styles, easters, validateEaster, incrementAlert } = props;

  const handleYeatsEaster = () => {
    /* ass : 65 83 83 */
    /* cul : 67,85,76 */
    if (!easters.zola) {
      validateEaster('zola');
      incrementAlert();
    }
  };
  
  return (
    <div className={classes.root} styles={styles}>
      <Grid item xs={12} sm={8} md={6} className={classes.grid}>
        {easters.zola ? <Zola /> : <Yeats />}
      </Grid>
      <Konami easterEgg={handleYeatsEaster} konami={[65, 83, 83]} />
    </div>
  );
};

PageTwo.propTypes = {
  classes: PropTypes.object.isRequired,
  easters: PropTypes.object.isRequired,
  validateEaster: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(PageTwo)
);
