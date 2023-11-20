import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Service Master | About Us</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="about-us-container p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Welcome to{" "}
          <span className="text-blue-500 font-bold">[Service Master]</span>,
          your trusted partner in seamless relocation!
        </p>

        <p className="text-gray-800 mb-6">
          At <span className="text-blue-500 font-bold">[Service Master]</span>,
          we understand that moving can be a stressful experience, and our
          mission is to make it as smooth and hassle-free as possible for our
          clients. With years of experience in the moving industry, we have
          built a reputation for reliability, efficiency, and excellent customer
          service.
        </p>

        <p className="text-gray-800 mb-6">
          Our team of dedicated professionals is committed to providing
          top-notch moving services tailored to meet the unique needs of each
          client. Whether you are moving locally or long-distance, our skilled
          movers are here to assist you every step of the way.
        </p>

        <p className="text-gray-800 mb-6">
          Why choose{" "}
          <span className="text-blue-500 font-bold">[Service Master]</span>?
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Experienced and Reliable: With years of experience, we have
            successfully handled countless moves, earning the trust of our
            clients.
          </li>
          <li>
            Professional Team: Our team of trained and courteous movers is
            dedicated to ensuring a smooth and stress-free moving experience.
          </li>
          <li>
            Comprehensive Services: From packing and loading to transportation
            and unloading, we offer a full range of moving services to meet your
            needs.
          </li>
          <li>
            Customer Satisfaction: Your satisfaction is our priority. We go the
            extra mile to exceed your expectations and make your move a positive
            experience.
          </li>
        </ul>

        <div className="flex gap-2">
       
          <p className="text-gray-800 mb-6">Visit us at : </p>
          <p className="text-gray-800 mb-6">  [3569 Nicholas Street]</p>
        </div>

         <div className="flex gap-2">
         <p className="text-gray-800 mb-6">Contact us at : </p>
        <p className="text-blue-500 font-bold mb-6">
           [601-567-3884]
        </p>
         </div>
        <p className="text-gray-800">
          Thank you for considering{" "}
          <span className="text-blue-500 font-bold">[Service Master]</span> for
          your moving needs. We look forward to serving you and making your move
          a success!
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
