import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);  
    this.state = { 
      val: "" 
    }
  }

  handleChange = async (e)=>{
    this.setState({val: e.target.value});
  }

  componentDidMount(){
    this.refs.input.focus()
  }

  handleClick=()=>{
    window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
  }

  handleKeyDown= (e)=>{
    if (e.keyCode === 13){
      this.handleClick()
    }
    this.refs.input.focus()
  }

  render() {
    return (
      <div className="App">
        <input ref="input" type="text" 
          defaultValue={this.searchText} 
          onChange={this.handleChange} 
          onKeyDown={this.handleKeyDown} 
        />
        <button onClick={this.handleClick} >查看</button>
      </div>
    );
  }
}

export default App;