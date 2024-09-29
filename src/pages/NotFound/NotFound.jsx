// Importation de Link depuis React Router pour la navigation entre les pages
import { Link } from "react-router-dom";

// Importation des styles spécifiques pour la page d'erreur NotFound
import "./NotFound.css";

// Définition du composant fonctionnel NotFound
const NotFound = () => {
  return (
    // Conteneur principal pour la page d'erreur
    <div>
      {/* Conteneur pour le message d'erreur */}
      <div className="pageNotFound"> {/* Classe CSS pour styliser la page d'erreur */}
        {/* Titre affichant le code d'erreur 404 */}
        <h1 className="title-not-found">404</h1>

        {/* Message d'erreur indiquant que la page demandée n'existe pas */}
        <p className="text-not-found">Oups! La page que vous demandez n'existe pas.</p>

        {/* Lien pour retourner à la page d'accueil */}
        <Link className="error-link" to="/"> {/* Lien vers la route d'accueil */}
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

// Exportation du composant NotFound 
export default NotFound;
