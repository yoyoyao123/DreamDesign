import React from 'react'
import NavBar from '../components/NavBar'
import { useNavigate,useParams } from "react-router-dom";
import { produits } from '../../data';
import Card from '../components/card';
import './Categorie.css'

function Categorie() {
    let {name}= useParams()
    const produitsCard = produits
    console.log(name)
    let filtp =produitsCard.filter((item)=> item.Categorie == "Meuble" )
    console.log(filtp)
  return (
    <div>
        <div className='container_card'>
            {
                produitsCard.filter((item)=> item.Categorie == name).map((item, index)=> <Card key={index} produit={item} />)
            }
        </div>
    </div>
  )
}

export default Categorie