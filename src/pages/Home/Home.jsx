import Banner from "../../components/Banner/Banner";
import LogementList from "../../components/Logementcard/Logementcard"
import logements from "../../datas/logement.json";
import "./Home.css"
const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <LogementList logements={logements} />
      </main>
    </>
  )
}

export default Home