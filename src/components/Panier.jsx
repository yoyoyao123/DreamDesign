import { Drawer } from 'antd';
import React from 'react';

function Panier({ panier, removeFromPanier, updateQuantity, validerPanier,open,onClose }) {
  return (

    <Drawer
    placement="right"
    width={250}
    onClose={onClose}
    open={open}>

    <div className="panier">
      <h2>Votre Panier</h2>
      {panier.map((article) => (
          <div key={article.id} className="article">
          <p>{article.nom}</p>
          <p>Prix : fr{article.prix}</p>
          <p>Quantité : {article.quantite}</p>
          <button onClick={() => removeFromPanier(article.id)}>Supprimer</button>
          <button onClick={() => updateQuantity(article.id, article.quantite - 1)}>-</button>
          <button onClick={() => updateQuantity(article.id, article.quantite + 1)}>+</button>
        </div>
      ))}
      <p>Total : ${panier.reduce((total, article) => total + article.prix * article.quantite, 0)}</p>
      <button onClick={validerPanier} className="valider-panier-button">
        Valider le Panier
      </button>
    </div>
      </Drawer>
  );
}

export default Panier;
