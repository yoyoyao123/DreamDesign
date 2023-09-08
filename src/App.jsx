import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Acceuille from './pages/Acceuille'
import DetailProducts from './pages/DetailProducts';
import Footer from './components/footer';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import ArticleList from './components/ArticleList';
import Panier from './components/Panier';
import CartIcon from './components/CartIcon';
import { Outlet } from 'react-router-dom';
import { Paniers } from '../data';
import { Modal } from 'antd';





function App() {
  const [panier, setPanier] = useState(Paniers)
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal]= useState(false)
  const [openRegister,setOpenRegister]= useState(true)

  const [articles] = useState([
    { id: 1, nom: 'Article 1', prix: 10 },
    { id: 2, nom: 'Article 2', prix: 20 },
    { id: 3, nom: 'Article 3', prix: 15 },
  ]);

  // Fonction pour ajouter un article au panier
  const addToPanier = (article) => {
    setPanier([...panier, { ...article, quantite: 1 }]);
  };

  // Fonction pour supprimer un article du panier
  const removeFromPanier = (articleId) => {
    const updatedPanier = panier.filter((article) => article.id !== articleId);
    setPanier(updatedPanier);
  };

  // Fonction pour mettre à jour la quantité d'un article dans le panier
  const updateQuantity = (articleId, newQuantity) => {
    const updatedPanier = panier.map((article) => {
      if (article.id === articleId) {
        return { ...article, quantite: newQuantity };
      }
      return article;
    });
    setPanier(updatedPanier);
  };

  // Fonction de validation du panier
  const validerPanier = () => {
    if (isPanierValide(panier)) {
      alert("Votre panier est validé !");
      // Ajoutez ici le code pour passer à la commande.
    } else {
      alert("Votre panier est vide ou invalide. Veuillez ajouter des articles.");
    }
  };
const onClose=()=>{
  setOpen((prev)=>!prev)
}
const openCart =()=>{
  setOpen(true)
}

  const onClick = () => {
   setOpenModal(true)
  }
  // Fonction de validation du panier (exemple simple : le panier doit contenir au moins un article)
  const isPanierValide = (panier) => {
    return panier.length > 0;
  };
  return (
    <div className="App">
      <NavBar onClick={onClick} openCart={openCart} />
<Outlet/>
   <Footer/>
  <Panier onClose={onClose} open={open} panier={panier} removeFromPanier={removeFromPanier} updateQuantity={updateQuantity} validerPanier={validerPanier} /> 
<Modal
title="DreamDesign"
 centered
 open={openModal}
 onOk={() => setOpenModal(false)}
 onCancel={() => setOpenModal(false)}
 width={700}
>
{
        openRegister ?  <Inscription onClick={()=>setOpenRegister(false)}/> : <Connexion/>
       }
</Modal>
    </div>
  )
}

export default App
