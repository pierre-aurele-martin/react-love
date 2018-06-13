import React from 'react';
import { Button } from '@material-ui/core';

const Loader = props => {
  let loader = null;

  if (props.error) {
    loader = (
      <div>
        Error!{' '}
        <Button fullWidth onClick={props.retry}>
          Retry
        </Button>
      </div>
    );
  } else if (props.timedOut) {
    loader = (
      <div>
        Taking a long time...{' '}
        <Button fullWidth onClick={props.retry}>
          Retry
        </Button>
      </div>
    );
  } else if (props.pastDelay) {
    loader = <div>Loading...</div>;
  } else {
    loader = null;
  }
  return loader;
};

export default Loader;