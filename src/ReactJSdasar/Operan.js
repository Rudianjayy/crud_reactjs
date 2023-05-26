import React, { Component } from 'react'

export default class Operan extends Component {

    // gantimakanan(makanan_baru) {
    //     this.setState({
    //         makanan : makanan_baru
    //     })
    // }

  render() {
    const { makanan, gantimakanan } = this.props
    return (
      <div>
        <h2>Operan state menjadi props = {makanan}</h2>
        <button onClick={() => gantimakanan("soto")}>Ganti Makanan</button>
      </div>
    )
  }
}
