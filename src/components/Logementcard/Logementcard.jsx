// Importation de Link pour la navigation entre les pages avec React Router
import { Link } from "react-router-dom";

// Importation des styles spécifiques au composant
import "./Logementcard.css";

// Importation de PropTypes pour valider les types des props
import PropTypes from "prop-types";

// Définition du composant fonctionnel LogementCard
const LogementCard = ({ logements }) => {
  return (
    <section className="logement-card-list">
      {/* Vérification que "logements" est bien un tableau avant de le mapper */}
      {Array.isArray(logements) && logements.map((logement) => (
        <article key={logement.id} className="card">
          {/* Lien avec aria-label pour l'accessibilité et lazy loading pour les images */}
          <Link to={`/logement/${logement.id}`} className="card-link" aria-label={`Voir les détails du logement ${logement.title}`}>
            <div className="img-container">
              <img src={logement.cover} alt={logement.title} className="card-image" loading="lazy" />
            </div>
            <div className="card-title">
              <h2>{logement.title}</h2>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};

// Validation des types des props avec PropTypes
LogementCard.propTypes = {
  logements: PropTypes.array.isRequired, // La prop "logements" doit être un tableau (obligatoire)
};

// Exportation du composant LogementCard pour utilisation dans d'autres fichiers
export default LogementCard;
