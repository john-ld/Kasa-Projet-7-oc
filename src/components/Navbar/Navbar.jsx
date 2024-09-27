// Importation des styles spécifiques pour la barre de navigation
import "./Navbar.css";

// Importation du logo utilisé dans la barre de navigation
import logo from "../../assets/LOGO.png";

// Importation de NavLink pour la navigation avec React Router
import { NavLink } from "react-router-dom";

// Définition du composant fonctionnel Navbar
const Navbar = () => {
  return (
    // Élément nav qui représente la barre de navigation
    <nav className="navbar">
      {/* Conteneur pour le logo de la barre de navigation */}
      <div className="navbar-logo">
        {/* Affichage du logo avec une balise alt pour l'accessibilité */}
        <img className="logo" src={logo} alt="Logo Kasa" />
      </div>

      {/* Lien vers la page d'accueil avec un style actif selon l'état du lien */}
      <NavLink
        to="/" // Lien vers la route d'accueil
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link" // Applique une classe active si le lien est actif
        }
        aria-label="Aller à la page d'accueil" // Amélioration d'accessibilité pour les lecteurs d'écran
      >
        Accueil {/* Texte du lien */}
      </NavLink>

      {/* Lien vers la page À Propos avec un style actif selon l'état du lien */}
      <NavLink
        to="/About" // Lien vers la route À Propos
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link" // Applique une classe active si le lien est actif
        }
        aria-label="Aller à la page À Propos" // Amélioration d'accessibilité pour les lecteurs d'écran
      >
        À Propos {/* Texte du lien */}
      </NavLink>
    </nav>
  );
}

// Exportation du composant Navbar pour pouvoir l'utiliser dans d'autres fichiers
export default Navbar;
