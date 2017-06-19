import React from 'react';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        { this.props.children }
      </div>
    );
  }
}

export default Main;
