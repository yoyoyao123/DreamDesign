import React from 'react'


function ArticleList({ articles, addToPanier }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.id} className="article">
          <h3>{article.nom}</h3>
          <p>Prix : ${article.prix}</p>
          <button onClick={() => addToPanier(article)}>Ajouter au Panier</button>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;


