import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Form from "./Form";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: 0,
    };
    
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      })
    } else {
      const editselainMakanan  = this.state.makanans.filter((makanan) => makanan.id !== this.state.id).map((filterMakanan) => {
        return filterMakanan
      });

      this.setState({
        makanans: [
          ...editselainMakanan,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      })
    }
   


    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    })
  }

  editData = (id) => {
    const editMakanan  = this.state.makanans.filter((makanan) => makanan.id === id).map((filterMakanan) => {
      return filterMakanan
    });

    this.setState({
      nama: editMakanan[0].nama,
      deskripsi: editMakanan[0].deskripsi,
      harga: editMakanan[0].harga,
      id: editMakanan[0].id,
    })
  }

  hapusData = (id) => {
    const hapus  = this.state.makanans.filter((makanan) => makanan.id !== id).map((filterMakanan) => {
      return filterMakanan
    });
    this.setState({
      makanans : hapus
    })
}

  render() {
    // console.log(this.state.makanans);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-5">
          <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
          <Form
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
