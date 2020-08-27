import React, { Component } from "react";
 const color = '#'+Math.floor(Math.random()*16777215).toString(16);
class MyNav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <a color={color} href="https://vegibit.com/create-a-navbar-component-in-react/">
            <h1>Nav Bar </h1>
            {/* <span className="badge badge-secondary">{this.props.totalItems}</span> */}
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default MyNav;