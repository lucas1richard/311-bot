import React from 'react';
import Nav from './react/Nav';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav />
        { this.props.children }
      </div>
    );
  }
}

export default Main;
