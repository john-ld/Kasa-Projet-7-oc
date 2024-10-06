// Importation des styles spécifiques pour le footer
import "../Footer/Footer.css"
import logo from "../../assets/Logoblack.png"

// Définition du composant fonctionnel (Footer)
const Footer = () => {
  return (
    <footer className="Footer">
      <img src={logo} alt="logo kasa Footer" />
      <p className="copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}
// Exportation du composant Footer
export default Footer