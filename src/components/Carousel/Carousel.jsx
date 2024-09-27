// Importation des styles pour le carrousel
import "./Carousel.css";

// Importation des images pour les flèches de navigation du carrousel
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

// Importation de useState et useEffect pour la gestion des états dans le composant
import { useState, useEffect } from "react";

// Importation des données des logements depuis un fichier JSON
import logements from "../../datas/logement.json";

// Définition du composant fonctionnel Carousel
const Carousel = () => {
  // Utilisation d'un état pour gérer le logement actif, ici on sélectionne le premier logement par défaut
  const [activeListing, setActiveListing] = useState(logements[0]);

  // Utilisation d'un état pour suivre l'index de l'image actuellement affichée dans le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect pour réinitialiser l'index de l'image lorsque le logement actif change
  useEffect(() => {
    setCurrentIndex(0); // Réinitialise à la première image lorsqu'un nouveau logement est sélectionné
  }, [activeListing]);

  // Fonction pour passer à l'image suivante dans le carrousel
  const nextImage = () => {
    // Si on est à la dernière image, revient à la première; sinon passe à l'image suivante
    setCurrentIndex((prevIndex) =>
      prevIndex === activeListing.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à l'image précédente dans le carrousel
  const prevImage = () => {
    // Si on est à la première image, va à la dernière; sinon passe à l'image précédente
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activeListing.pictures.length - 1 : prevIndex - 1
    );
  };

  // Gestion des erreurs si le logement actif ou ses images sont indisponibles
  if (!activeListing || !activeListing.pictures || activeListing.pictures.length === 0) {
    return <p>Aucune image disponible pour ce logement.</p>; // Retourne un message d'erreur si aucune image n'est disponible
  }

  // Retourne le JSX pour afficher le carrousel d'images
  return (
    <div className="logement-container">
      {/* Si le logement a des images, affiche le carrousel */}
      {activeListing.pictures.length > 0 && (
        <div className="logement-carousel">
          {/* Si le logement a plus d'une image, affiche les flèches de navigation */}
          {activeListing.pictures.length > 1 && (
            <button className="arrow arrow_left" onClick={prevImage} title="Image précédente">
              <img
                src={arrowLeft}
                alt="Fleche de gauche"
                className="arrow-container"
              />
            </button>
          )}

          {/* Affiche l'image actuellement sélectionnée dans le carrousel avec lazy loading */}
          <img
            src={activeListing.pictures[currentIndex]}
            alt={`${activeListing.title} image ${currentIndex + 1}`}
            className="logement-carousel-image"
            loading="lazy" // Lazy loading pour améliorer les performances en retardant le chargement des images
          />

          {/* Si le logement a plus d'une image, affiche la flèche de droite */}
          {activeListing.pictures.length > 1 && (
            <button className="arrow arrow_right" onClick={nextImage} title="Image suivante">
              <img
                src={arrowRight}
                alt="Fleche de droite"
                className="arrow-container"
              />
            </button>
          )}

          {/* Affiche un indicateur de position sous la forme "1/5", "2/5", etc. */}
          <div className="dots">
            {`${currentIndex + 1}/${activeListing.pictures.length}`}
          </div>
        </div>
      )}
    </div>
  );
};

// Exportation du composant Carousel pour pouvoir l'utiliser dans d'autres fichiers
export default Carousel;
