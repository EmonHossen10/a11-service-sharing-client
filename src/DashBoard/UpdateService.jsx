import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";

const UpdateService = () => {
  const data = useLoaderData();
  const {
    _id,
    Image,
    Name,
    serviceArea,
    Price,
    UserName,
    email,
    photo,
    description,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const pic = form.pic.value;
    const name = form.name.value;
    const description = form.description.value;
    const area = form.area.value;
    const price = form.price.value;
    const updatedService = { pic, name, description, area, price };
    console.log(updatedService);

    //

    fetch(`http://localhost:5000/showAddService/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Updated  Successfully",
          });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className=" rounded-xl my-5 bg-base-200">
        <h1 className="text-3xl text- pt-4 ps-9 font-bold">
          Update Service : {Name}{" "}
        </h1>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL </span>
            </label>
            <input
              type="text"
              name="pic"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Area </span>
            </label>
            <input
              type="text"
              name="area"
              placeholder="Service area"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-secondary">Update</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateService;
