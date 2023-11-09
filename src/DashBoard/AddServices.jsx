import { useContext } from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const UserName = user?.displayName;
  const email = user?.email;
  console.log(UserName, email);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const Image = form.photo.value;
    const Name = form.serviceName.value;

    const Price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const product = {
      Image,
      Name,
      serviceArea,
      Price,
      UserName,
      email,
      description,
    };
    console.log(product);

    // fetching

    fetch("http://localhost:5000/addservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "success");
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully added",
            text: "Products Successfully added to backend",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-8/12 rounded-xl mx-auto">
          <form onSubmit={handleAddService} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Add Service
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Here"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name </span>
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name "
                className="input input-bordered input-info  "
                required
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">User Name :</span>
              </label>
              <select className="input input-bordered input-info  " id="fruits">
                <option value="apple">Apple</option>
                <option value="banana">Samsung</option>
                <option value="cherry">Sony</option>
                <option value="grape">Google</option>
                <option value="orange">Intel</option>
                <option value="strawberry">Huawei</option>
              </select>
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                defaultValue={user?.displayName}
                placeholder="username "
                disabled
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="username"
                defaultValue={user?.email}
                disabled
                placeholder="username "
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price here"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Description</span>
              </label>
              <textarea
                className="textarea textarea-info"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-info">Add Service</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddServices;
