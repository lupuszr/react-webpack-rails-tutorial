import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

import createStore from '../store/commentsStore';
import HeaderContainer from '../containers/HeaderContainer';

export default props => {
  const store = ReactOnRails.getStore('commentsStore');

  return (
      <Provider store={store}>
        <HeaderContainer />
      </Provider>
  );
};
