
import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { ajouterPaniers } from "../../data";

function Card({ produit }) {
  const {nom,prix,desc,image}= produit
  const addPanier =(item)=>{
    ajouterPaniers(item)
  }
  console.log(produit.nom);
  return (
    <div  className="card">
     <Link  to="detail" >
     <img src= {image} alt="" />
     </Link>
      <h2>   {nom} </h2>
      <p> {desc} </p>
      <p>Prix : {prix}  </p>
      <button onClick={()=>addPanier(produit)} className="btn-add-to-cart" >Ajouter au panier</button>
    </div>
  );
}
 
export default Card;