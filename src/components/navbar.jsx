import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('navbar');
    return (
      <nav className="navbar">
        <i className="navber-logo fas fa-leaf"> </i>
        <span> Habit Tracker</span>
        <span className="navber-count">{this.props.totalcount}</span>
      </nav>
    );
  }
}

export default Navbar;
