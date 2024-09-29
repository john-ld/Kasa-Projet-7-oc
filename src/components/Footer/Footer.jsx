// Importation des styles spécifiques pour le footer
import "../Footer/Footer.css"
import logo from "../../assets/logoblack.png"

// Définition du composant fonctionnel (Footer)
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa footer" />
      <p className="copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}
// Exportation du composant Footer
export default Footer