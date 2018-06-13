import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../components/AsyncLoader/AsyncLoader';

const AsyncL = opts =>
  Loadable(
    Object.assign(
      {
        loading: () => <Loader/>,
        delay: 200,
        timeout: 2000
      },
      opts
    )
  );

export default AsyncL;
