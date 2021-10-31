import React, { Component } from 'react'
import Button from './components/Button'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
}    


  render() {
    const name = 'Jon'
    return (
      <div className='container'>
        <h1>Hell {name}</h1>
        <Button  step={1} incrementCount={this.handleClick}/>
        <Button  step={5} incrementCount={this.handleClick}/>
        <Button  step={10} incrementCount={this.handleClick}/>
        <Button  step={25} incrementCount={this.handleClick}/>
        <Button  step={100} incrementCount={this.handleClick}/>
        <h6>The count is {this.state.count}</h6>
      </div>
    )
  }
}
