import React, { useState } from 'react'
import './Acceuille.css'
import Carousel from '../components/Swiper'
import Card from "../components/card"
import { produits } from '../../data'
import Modal from 'antd/es/modal/Modal'
import Inscription from './Inscription'
import Connexion from './Connexion'
import NavBar from '../components/NavBar'
import { useNavigate, useNavigation } from 'react-router-dom'

function Acceuille() {
  const navigate = useNavigate()

  const onClick = (name) =>{
    console.log("clivk")
navigate(`/Categorie/${name}`)
  }
  const tab = ["Décoration","Luminaire","Mobilier","Peinture" ,"Tissus" ,"Textile" ,"Store" , "Papier peint"]
  return (
    <div className='Container'>
            {/*<span><center><h1>DreamDisign</h1></center></span>*/}
            <div className='listItems'>
             <ul className='nav-list'>
              
              {
                tab.map((item) => <li ><h2 onClick={()=>onClick(item)}>{item} </h2></li>)
              }
             </ul>
             </div>
           
              <Carousel/>
             <span><center><h1>Décorez votre interieur avec le style qui vous correspond</h1></center></span>
               <div className='listItem'>
               {
                   produits.map((item)=> (<Card key={item.id} produit={item}/>))
               }
                </div>

                     <main>
                       <div className='container_descrip'>
                       <span><center><h1>Toute la décoration pour votre maison</h1></center></span>
                        <span>DreamDisign vous propose tout ce qu’il vous faut pour décorer,
                           meubler, ranger et personnaliser votre maison. 

                            Nous Mettons à votre disposition de nombreuses catégories qui
                             vous permettrons de trouver rapidement ce dont vous avez 
                             besoin mais aussi de découvrir de nouveaux produits.

                                Plus besoin d’aller chercher sur différentes boutiques,
                                 DreamDisign a tout ce qu’il faut pour répondre à tous vos 
                                 besoins d’ameublement et de décoration.

                              Pour chaque pièce de la maison vous trouverez
                               votre bonheur, du meuble à la petite décoration
                                en passant par les rangements et les luminaires.

                            </span>
                             </div>
                            </main>
                             <footer>
                            </footer>
       
                 </div>

    
    
  )
}

export default Acceuille