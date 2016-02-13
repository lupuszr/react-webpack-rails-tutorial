import React, { PropTypes } from 'react';
import css from './Header.scss';

import BaseComponent from 'libs/components/BaseComponent';

export default class Header extends BaseComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  };

  componentDidMount() {    
  }

  componentWillUnmount() {
  }

  render() {
    const { actions, data } = this.props;
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">React Router Demo</a></li>
          <li><a href="/no-router">React Demo</a></li>
          <li><a href="/simple">Simple React</a></li>
          <li><a href="/comments">Classic Rails</a></li>
          <li><a href="https://github.com/shakacode/react-webpack-rails-tutorial">Source on Github</a></li>
          <li><a href="http://www.railsonmaui.com/blog/2014/10/03/integrating-webpack-and-the-es6-transpiler-into-an-existing-rails-project/">Tutorial Article</a></li>
          <li><a href="http://forum.shakacode.com/t/fast-rich-client-rails-development-with-webpack-and-the-es6-transpiler/82/22">Forum Discussion</a></li>
          <li className={css.counter}>{data.get('$$comments').size}</li>
        </ul>
      </div>
    );
  }
}
