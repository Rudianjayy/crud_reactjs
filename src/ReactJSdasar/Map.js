import React from 'react'


const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 15000
    },
    {
        nama: 'Sate',
        harga: 7000
    },
    {
        nama: 'Nasi Goreng',
        harga: 10000
    },
    
]

//reduce/total
const total_bayar = makanans.reduce((total_harga, makanan) => total_harga+makanan.harga, 0);

const map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2>
        <ul>
            {makanans.map((makanan,index) =>(

            <li>{index+1}.{makanan.nama} - Harga {makanan.harga}</li>
            ))}
        </ul>

        <h2> Map Filter Harga Lebih dari sama dengan 11.000</h2>
        <ul>
            {makanans.filter((makanan) => makanan.harga > 11000 ).map((makanan,index) =>(

            <li>{index+1}.{makanan.nama} - Harga {makanan.harga}</li>
            ))}
        </ul>

        <h3> Total Harga : {total_bayar}</h3>

    </div>
  )
}

export default map