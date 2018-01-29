import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppDemo from './AppDemo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numChildren: 0,
      taskContents: []
    };
  }

  onKeyDownHandler(event) {
    if (event.keyCode !== 13) {
        return;
      }

    event.preventDefault();
    if(this.refs.testInput.value !== '') {
      this.setState({
        numChildren: this.state.numChildren + 1
      });
      const newTaskContents = this.state.taskContents;
      newTaskContents.push(this.refs.testInput.value);
      this.setState({
        taskContents: newTaskContents
      });
    }

    this.refs.testInput.value = '';
  }

  render() {
    const children = [];
    var ulStyle = {
      listStyleType: 'none'
    };
    var liStyle = {
      borderBottom: '1px black dashed'
    };

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<TaskComponent style={liStyle} key={i} value={this.state.taskContents[i]} />);
    };    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input type="text" ref="testInput" onKeyDown={this.onKeyDownHandler.bind(this)} />
        </div>
        <ul style={ulStyle}>
          {children}
        </ul>
      </div>
    );
  }
}

const TaskComponent = props => <li style={props.style}>{props.value}</li>;

export default App;
