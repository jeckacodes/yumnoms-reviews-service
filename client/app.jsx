/* eslint-disable import/extensions */
import React from 'react';
import Feed from './feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello from React!
        <Feed />
      </div>
    );
  }
}

export default App;