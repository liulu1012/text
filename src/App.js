import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  constructor(){
    super()
    this.state={
      width: 1080
    }
  }
  componentDidMount() {
    console.log(this.refs.dd.clientWidth);
    this.setState({
      width:this.refs.dd.clientWidth
    })
}
  render() {
    console.log(this.state.width);
    return (
      <div className="App" ref="dd"  id="gg">
      {
        this.state.width<1080? 111 : 222
      }

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
