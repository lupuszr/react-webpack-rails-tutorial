import React from 'react';
import { Provider } from 'react-redux';

import commentsStore from '../store/commentsStore';
import NonRouterCommentsContainer from '../containers/NonRouterCommentsContainer';

export default props => {
  const store = ReactOnRails.getStore('commentsStore');

  return (
      <Provider store={store}>
        <NonRouterCommentsContainer />
      </Provider>
  );
};
