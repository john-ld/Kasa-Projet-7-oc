// Importation de React pour utiliser des fonctionnalités de base
import React from 'react';
import "./App.css"
// Importation des composants nécessaires pour le routage
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import du routeur pour la navigation entre les pages

// Importation des composants de l'application
import Navbar from "./components/Navbar/Navbar"; // Barre de navigation
import Footer from "./components/Footer/Footer"; // Pied de page
import Home from "./pages/Home/Home"; // Page d'accueil
import About from "./pages/About/About"; // Page À Propos
import Form from "./pages/Logement/Logement"; // Page pour afficher les détails d'un logement
import NotFound from "./pages/NotFound/NotFound"; // Page d'erreur 404

// Définition du composant fonctionnel principal App
function App() {
  return (
    <>
      {/* Conteneur principal de l'application */}
      <div className="Body">
        {/* Affichage de la barre de navigation */}
        <Navbar />

        {/* Routes définies pour la navigation dans l'application */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Route pour la page À Propos */}
          <Route path="/About" element={<About />} />

          {/* Route pour afficher les détails d'un logement par ID */}
          <Route path="/logement/:id" element={<Form />} />

          {/* Route pour gérer toutes les autres URL non définies */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Affichage du pied de page */}
      <Footer />
    </>
  );
}

// Exportation du composant App pour l'utiliser dans d'autres fichiers
export default App;
