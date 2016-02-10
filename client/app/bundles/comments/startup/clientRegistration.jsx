import App from './ClientApp';
import Header from './ClientHeaderApp';
import RouterApp from './ClientRouterApp';
import SimpleCommentScreen from '../components/SimpleCommentScreen/SimpleCommentScreen';
import ReactOnRails from 'react-on-rails';
import commentsStore from '../store/commentsStore'

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register(
  {
    App,
    RouterApp,
    SimpleCommentScreen,
    Header,
  }
);

ReactOnRails.registerStore({
	commentsStore
})
