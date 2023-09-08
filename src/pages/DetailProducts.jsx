import React, { useState } from 'react'
import  './DetailProducts.css'
import Footer from '../components/footer'
import Item from 'antd/es/list/Item'
import NavBar from '../components/NavBar'


 const image = [{
    url:"banc1.webp"
 },
 {
    url:"banc2.webp"
 },
 {
    url:"banc3.webp"
 },{
    url:"banc4.webp"
 },{
    url:"banc5.webp"
 },
 {
    url:"banc6.webp"
 }]

function DetailProducts() {
    const [img, setImg]= useState('panier.jpeg')
  return (
    <div>
    <div className='product_detail'>

        <div className='box_left'>
           
    {image.map((item)=> (
            <div className='product_image' onClick={()=>setImg(item.url)}>
            <img src={item.url} alt="" />
        </div>
        ))}

        </div>
        <div className='product_image'>
            <img src={img} alt="" />
        </div>
        <div className='product_info'>
            <h2>Salon de jardin en rotin clair 2 places / coussins blancs SIBARI</h2>
            <p>Salon de jardin </p>
            <p>Prix 75000f</p>

           <input type="number"placeholder='1' />
           <button>Ajouter au panier</button>
           
        </div >
    </div>
        <div className='listItem'>

          <div className='card'><img src="canapé5.avif" alt="" />
          <h2>banc de jardin une places 25000f</h2>
          <button className='btn-add-to-cart'>ajouter</button>
          </div>  
         <div className='card'>
            <img src="salon3.jpeg" alt="" />
         <h2>banc de jardin trois places 50000f</h2>
         <button className='btn-add-to-cart'> ajouter</button>
         </div>   
           <div className='card'>
            <img src="salon4.jpeg" alt="" />
           <h2>banc de jardin trois places 50000f</h2>
           <button className='btn-add-to-cart'> ajouter</button>
           </div> 
           <div className='card'><img src="salon5.jpg" alt="" />
           <h2>banc de jardin trois places  50000f</h2>
           <button className='btn-add-to-cart'> ajouter</button>
           </div> 
        </div>
    </div>
     

  )
}

export default DetailProducts