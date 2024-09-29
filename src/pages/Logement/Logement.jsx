// Importation des hooks useState et useEffect pour gérer l'état et les effets secondaires
import { useState, useEffect } from "react";

// Importation des données des logements depuis un fichier JSON
import logements from "../../datas/logement.json";

// Importation des composants Collapse, Rating et Carousel
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Carousel from "../../components/Carousel/Carousel";

// Importation des styles spécifiques au composant Form
import "./Logement.css";

// Importation du hook useParams pour accéder aux paramètres d'URL
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

// Définition du composant fonctionnel Logement
const Logement = () => {
  // Récupération de l'ID du logement depuis les paramètres d'URL
  const { id } = useParams();

  // État pour stocker le logement actif, initialisé avec le premier logement par défaut
  const [activeListing, setActiveLogement] = useState(null);

  // Hook useEffect pour mettre à jour le logement actif lorsque l'ID change
  useEffect(() => {
    // Recherche du logement correspondant à l'ID dans le tableau de logements
    const logement = logements.find((logement) => logement.id === id);
    if (logement) {
      setActiveLogement(logement); // Mise à jour de l'état avec le logement trouvé
    }
  }, [id]); // Dépendance à l'ID pour exécuter l'effet chaque fois que l'ID change

  // Si aucun logement actif n'est trouvé, retourne un élément vide
  if (!activeListing) {
    return <NotFound></NotFound>
  }

  return (
    // Conteneur principal pour le logement
    <div className="logement-container">
      {/* Composant Carousel affichant les images du logement actif */}
      <Carousel pictures={activeListing.pictures} title={activeListing.title} />

      {/* Section contenant les informations principales du logement */}
      <section className="first-container">
        <div className="container-title">
          {/* Titre du logement */}
          <h1 className="title">{activeListing.title}</h1>
          {/* Sous-titre affichant la localisation du logement */}
          <p className="subtitle">{activeListing.location}</p>
          <div className="tags">
            {/* Affichage des tags associés au logement */}
            {activeListing.tags.map((tag, index) => (
              <button key={index} className="tag">
                {tag} {/* Texte du tag */}
              </button>
            ))}
          </div>
        </div>

        {/* Section contenant les informations sur l'hôte */}
        <section className="housing-info">
          {activeListing.host && (
            <div className="host-info">
              {/* Affichage du nom de l'hôte */}
              <p className="host-name">{activeListing.host.name}</p>
              {/* Affichage de l'image de l'hôte avec une balise alt pour l'accessibilité */}
              <img
                src={activeListing.host.picture}
                alt={activeListing.host.name}
                className="host-picture"
              />
            </div>
          )}
          {/* Affichage de la note du logement à l'aide du composant Rating */}
          <div className="rating">
            <Rating rating={Number(activeListing.rating)} />
          </div>
        </section>
      </section>

      {/* Section secondaire contenant des informations supplémentaires */}
      <section className="second-container">
        {/* Collapse pour afficher la description du logement */}
        <Collapse
          title="Description"
          content={activeListing.description} // La description est une chaîne de caractères
          className="collapse collapse-description"
        />

        {/* Collapse pour afficher les équipements du logement */}
        <Collapse
          title="Équipements"
          content={Array.isArray(activeListing.equipments) ? activeListing.equipments.join(", ") : activeListing.equipments} // Conversion du tableau en chaîne
          className="collapse collapse-equipments"
        >
          {activeListing.equipments &&
            activeListing.equipments.length > 0 && (
              <ul className="equipments-list">
                {/* Affichage de la liste des équipements */}
                {activeListing.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li> // Chaque équipement est affiché dans une liste
                ))}
              </ul>
            )}
        </Collapse>
      </section>
    </div>
  );
};

// Exportation du composant Logement 
export default Logement;
