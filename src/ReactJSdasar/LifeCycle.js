import React, { Component } from 'react'
import Subllifecycle from './Subllifecycle';

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         makanan : 'Bakso',
        data: {},
        tampilhalsub : false,
      };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
            data : json
        })
      })
    }

    ubahMakanan(value) {
        this.setState({
            makanan : value
        })
    }
  render() {
    // console.log("Halo : ", this.state.data);
    return (
      <div>
        <h2>{this.state.makanan }</h2>
        {this.state.tampilhalsub && <Subllifecycle ubahMakanan={(value)=> this.ubahMakanan(value)}/>}
        <button onClick={() => this.setState({tampilhalsub : !this.state.tampilhalsub})}>Tampilkan Halaman Sub</button>
      </div>
    )
  }
}
