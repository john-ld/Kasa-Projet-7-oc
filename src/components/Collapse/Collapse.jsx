// Importation du hook useState pour gérer l'état du composant Collapse
import { useState } from "react";

// Importation de PropTypes pour valider les types des props
import PropTypes from "prop-types";

// Importation des styles spécifiques au composant Collapse
import "./Collapse.css";

// Définition du composant fonctionnel Collapse
const Collapse = ({ title, content, className, defaultOpen = false, openIcon = "fa-chevron-down", closeIcon = "fa-chevron-up" }) => {
  // Utilisation de useState pour gérer l'état "isOpen", initialisé à la valeur de defaultOpen
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Fonction pour basculer entre l'ouverture et la fermeture du collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse l'état actuel (si ouvert, fermer et vice versa)
  }

  return (
    // Conteneur principal du Collapse, auquel est appliquée la classe CSS dynamique fournie en prop
    <div className={`collapse ${className}`}>
      <div className="collapse-container">
        {/* Titre du Collapse, cliquable pour déclencher le toggle */}
        <h3
          className="collapse-container__title"
          onClick={toggleCollapse} // Appelle la fonction toggleCollapse lors du clic
        >
          {title} {/* Affiche le titre passé en prop */}
          <div className="collapse-container__arrow-container">
            {/* Icône dynamique, personnalisée via les props openIcon et closeIcon */}
            <i className={`fa-solid ${isOpen ? openIcon : closeIcon}`}></i>
          </div>
        </h3>
      </div>

      {/* Conteneur du contenu, affiché ou caché selon l'état isOpen */}
      <div
        className={
          isOpen
            ? "collapse-container__content is-open" // Si ouvert, ajoute une classe qui le rend visible
            : "collapse-container__content" // Si fermé, n'ajoute pas la classe d'ouverture
        }
      >
        <div
          className={`collapse-container__content__text ${isOpen ? "collapse-container__content__open" : ""}`}
        >
          {/* Si le contenu est un tableau, affiche une liste; sinon, affiche simplement le contenu */}
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, i) => (
                <li key={i}>{item}</li> // Utilisation de l'index uniquement comme clé unique
              ))}
            </ul>
          ) : (
            <div>{content}</div> // Si le contenu est une chaîne, affiche-le directement
          )}
        </div>
      </div>
    </div>
  );
};

// Définition des PropTypes pour valider les types des props passées au composant
Collapse.propTypes = {
  title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères (obligatoire)
  content: PropTypes.oneOfType([ // Le contenu peut être soit une chaîne, soit un tableau de chaînes
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])) // Ajout pour gérer les tableaux de chaînes et/ou de nombres
  ]).isRequired,
  className: PropTypes.string, // La classe CSS peut être fournie en option
  defaultOpen: PropTypes.bool, // Définit si le collapse est ouvert ou fermé par défaut
  openIcon: PropTypes.string, // Icône pour l'état ouvert
  closeIcon: PropTypes.string, // Icône pour l'état fermé
};

// Exportation du composant Collapse pour l'utiliser dans d'autres fichiers
export default Collapse;
