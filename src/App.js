import React, {Component} from "react"
import './App.css';
import Button from './components/Button'
import { Input } from './components/Input'
import { InputShowEquation } from './components/Input'
import { ClearButton } from './components/ClearButton'
import * as math from 'mathjs';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: '',
      equation: ''
    }
  }
  showInput = val => {
    this.setState({input: this.state.input + val})
  }

  handleEqual = () => {
    this.setState({equation: this.state.input,input: math.evaluate(this.state.input)})
  }

  handleSquare = () => {
    this.setState({equation: "sqr" + "("+ this.state.input +")",input: math.square(this.state.input)})
  }

  render() {
    return (<div className="app" >
      <div className="calc-wrapper">
        <div className="screen">
        <InputShowEquation equation={this.state.equation}></InputShowEquation>
        <Input input={this.state.input}></Input>
        </div>
        <div className="row">
        <Button handleClick={this.showInput}>7</Button>
        <Button handleClick={this.showInput}>8</Button>
        <Button handleClick={this.showInput}>9</Button>
        <Button handleClick={this.showInput}>/</Button>
        </div>
        <div className="row">
        <Button handleClick={this.showInput}>4</Button>
        <Button handleClick={this.showInput}>5</Button>
        <Button handleClick={this.showInput}>6</Button>
        <Button handleClick={this.showInput}>*</Button>
        </div>
        <div className="row">
        <Button handleClick={this.showInput}>1</Button>
        <Button handleClick={this.showInput}>2</Button>
        <Button handleClick={this.showInput}>3</Button>
        <Button handleClick={this.showInput}>+</Button>
        </div>
        <div className="row">
        <Button handleClick={this.showInput}>.</Button>
        <Button handleClick={this.showInput}>0</Button>
        <Button handleClick={this.handleEqual}>=</Button>
        <Button handleClick={this.showInput}>-</Button>
        </div>
        
        <div className="row">
        <ClearButton handleClear = {() => this.setState({input: "",equation: ""})}>Clear</ClearButton>
        </div>
      </div>
    </div>)
  }
}


export default App;
