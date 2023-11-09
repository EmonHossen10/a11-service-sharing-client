import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import PopularServices from "./PopularServices";

 


const Home = () => {
  return (
    <div  >
      <nav>
        <Navbar></Navbar>
        <Banner></Banner>
        <PopularServices></PopularServices>
        <Footer></Footer>
      </nav>
    </div>
  );
};

export default Home;
