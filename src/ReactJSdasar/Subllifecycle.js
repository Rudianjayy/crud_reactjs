import React, { Component } from 'react'

export default class Subllifecycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("sate")
    }

  render() {
    return (
      <div>
        <h2>Component Sub lifecycle</h2>

      </div>
    )
  }
}
