// Importation de l'image à utiliser dans la bannière
import image from "../../assets/banner.png";

// Importation du fichier CSS pour appliquer les styles au composant Banner
import "./Banner.css";

// Définition du composant fonctionnel Banner
function Banner() {
  return (
    // Conteneur principal pour la bannière
    <div className="banner">

      {/* Image de la bannière avec une classe CSS pour la mise en forme */}
      <img className="banner-img" src={image} alt="bannière" />

      {/* Superposition (overlay) avec une classe CSS 'overlaps' */}
      <div className="overlaps"></div>

      {/* Titre principal de la bannière */}
      <h1 className="title-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser
export default Banner;
