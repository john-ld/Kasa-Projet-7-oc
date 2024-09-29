// Importation des dépendances nécessaires
import Image from "../../assets/banner2.png"; // Image utilisée dans la bannière
import "./About.css"; // Fichier CSS pour le style de la page
import aboutContent from "../../datas/about-us.json"; // Contenu "À propos" importé depuis un fichier JSON
import Collapse from "../../components/Collapse/Collapse"; // Composant Collapse pour les sections dépliables
import PropTypes from 'prop-types'; // PropTypes pour la validation des props

// Composant fonctionnel APropos
const APropos = () => {
  return (
    // Section de la bannière "À propos"
    <section className="banner-about">
      {/* Affichage de l'image de la bannière */}
      <img className="banner-image" src={Image} alt="Bannière" />

      {/* Superposition (overlay) sur l'image pour l'effet visuel */}
      <div className="overlay-banner"></div>

      {/* Conteneur pour le contenu "À propos" */}
      <div className="container-about">
        {/* Appel de la fonction pour afficher les éléments "À propos" */}
        {renderAboutContent()}
      </div>
    </section>
  );
};

// Fonction qui génère dynamiquement le contenu "À propos" en parcourant le fichier JSON
const renderAboutContent = () => {
  return aboutContent.map((aboutItem) => (
    // Chaque section dépliable a une clé unique basée sur l'ID de l'élément
    <div key={aboutItem.id} className="about-collapse">
      {/* Affichage du composant Collapse avec le titre et le contenu de l'élément */}
      <Collapse title={aboutItem.title} content={aboutItem.content} />
    </div>
  ));
}

// Validation des types de données des props du composant Collapse
Collapse.propTypes = {
  title: PropTypes.string.isRequired,   // Le titre est une chaîne de caractères (obligatoire)
  content: PropTypes.string.isRequired  // Le contenu est une chaîne de caractères (obligatoire)
};

// Exportation du composant APropos 
export default APropos;
