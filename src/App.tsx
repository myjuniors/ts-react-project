import * as React from 'react';
import Hello from './component/Hello'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello message="typescript" />
      </div>
    );
  }
}

export default App;
