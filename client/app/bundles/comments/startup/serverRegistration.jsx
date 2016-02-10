// Example of React + Redux
import App from './ServerApp';
import Header from './ServerHeaderApp';
import RouterApp from './ServerRouterApp';
import ReactOnRails from 'react-on-rails';
import commentsStore from '../store/commentsStore'


ReactOnRails.register(
  {
    App,
    RouterApp,
    Header,
  }
);

ReactOnRails.registerStore({
	commentsStore
})