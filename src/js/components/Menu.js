import React, { Component } from 'react';
import { Link } from 'react-router';
import NProgress from 'nprogress';

class Menu extends Component {
  render() {
    return (
      <div id="home">
        <div className="avatar">
          <a href="https://github.com/boleixiongdi"></a>
        </div>
        <h1>博羸兄弟</h1>
        <div className="link">
          <Link to="all">全部</Link>
          <Link to="archive">归档</Link>
          <Link to="tags">标签</Link>
        </div>
      </div>
    );
  }
};

export default Menu;
