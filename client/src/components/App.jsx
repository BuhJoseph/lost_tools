import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="title">Fish Swim</div>
        <div id="controls">
          <div className="underline">Controls</div>
          <div>Up: ↑</div>
          <div>Down: ↓</div>
        </div>
      </div>
    );
  };
}

export default App;