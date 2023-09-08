import React from 'react'
import './Inscription.css';
import { Link } from 'react-router-dom';


function Inscription({onClick}) {
  const andelClik = ()=>{
onClick()
  }
  return (
      <div className="inscription-container">
    <h2>Inscription</h2>
    <form className="inscription-form" action="#">
      <div className="form-group">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required/>
      </div>
      <div className="form-group">
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required/>
      </div>
      <div className="form-group">
        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label for="motDePasse">Mot de passe :</label>
        <input type="password" id="motDePasse" name="motDePasse" required/>
      </div>
      <div><span>Deja un compte?</span> 
      <span onClick={andelClik}> <a href="">Connectez vous</a></span>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  </div>
    
    
  )
}

export default Inscription
