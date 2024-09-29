// Importation des styles spécifiques pour le composant Rating
import "../Rating/rating.css";

// Importation de PropTypes pour valider les types des props
import PropTypes from "prop-types";

// Définition du composant fonctionnel Rating
const Rating = ({ rating }) => {
  const defaultStars = 5; // Nombre total d'étoiles à afficher

  return (
    // Conteneur pour les étoiles de notation
    <div className="rates">
      {/* Création d'un tableau d'étoiles en fonction du nombre d'étoiles par défaut */}
      {[...Array(defaultStars)].map((_, index) => {
        return (
          <i
            key={index} // Clé unique pour chaque étoile, basée sur l'index
            className={`fa-xs fa-star ${index < rating ? "fa-solid" : "fa-regular" // Appliquation d'une classe solide ou régulière en fonction de la note
              }`}
            aria-hidden="true" // Indique que cette icône n'est pas nécessaire pour les lecteurs d'écran
          ></i>
        );
      })}
    </div>
  );
};

// Définition des PropTypes pour valider les types des props passées au composant
Rating.propTypes = {
  rating: PropTypes.number.isRequired, // La prop rating doit être un nombre et est obligatoire
}

// Exportation du composant Rating 
export default Rating;
