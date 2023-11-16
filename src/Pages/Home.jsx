import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Faq from "./Faq";
import PopularServices from "./PopularServices";

 


const Home = () => {
  return (
    <div  >
      <nav>
        <Navbar></Navbar>
        <Banner></Banner>
        <PopularServices></PopularServices>
        <Faq></Faq>
        <Footer></Footer>
      </nav>
    </div>
  );
};

export default Home;
