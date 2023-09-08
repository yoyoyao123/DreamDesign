import React from 'react'
 import './Connexion.css';

function Connexion() {
  return (
    <div>
     < div className="connexion-container">
    <h2>Connetez vous</h2>
    <form className="i-form" action="#">
    <div className="form-group">
        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label for="motDePasse">Mot de passe :</label>
        <input type="password" id="motDePasse" name="motDePasse" required/>
      </div>
      <button type="submit">Se connecter</button>
    </form>
     </div>
    </div>
  )
}

export default Connexion