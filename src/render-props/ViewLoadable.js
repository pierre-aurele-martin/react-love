import React from 'react';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import Loader from '../components/AsyncLoader/AsyncLoader';

const AsyncV = opts =>
  LoadableVisibility(
    Object.assign(
      {
        loading: () => <Loader />,
        delay: 200,
        timeout: 2000
      },
      opts
    )
  );

export default AsyncV;

const AsyncPageTwo = ViewL({
  loader: () => import('../Pages/PageTwo')
});

<AsyncV render={() => import('../Pages/PateTwo')} />