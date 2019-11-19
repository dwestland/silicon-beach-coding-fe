import React, { useState, useEffect } from 'react';

class CloneElement extends React.Component {
  render() {
    return (
      <div>
      <h1>Transforming Elements - cloneElement()</h1>
        <Buttons>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </Buttons>
      </div>
    )
  }
}
export default CloneElement

class Buttons extends React.Component {
  constructor() {
    super()
    this.state = {selected: 'None'}
  }
  selectItem(selected) {
    this.setState({selected})
  }
  render() {
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })

    let items = React.Children.map(this.props.children, fn)
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}


//Transforming Elements - cloneElement()
// Extending the functionality or properties of your children components
// Egghead video:
// https://egghead.io/lessons/react-use-react-cloneelement-to-extend-functionality-of-children-components
