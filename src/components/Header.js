import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <span className="system">Sistema</span>
          {' '}
          Solar
        </h1>
        <div className="ring" />
      </header>
    );
  }
}

export default Header;
