const Pricing = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-10">
        Take your suitable plan{" "}
      </h1>
      <div className="  rounded-lg p-8 bg-gradient-to-b from-sky-500 to-gray-500 text-white">
        <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>

        <div className="flex flex-wrap justify-around items-center">
          {/* Plan 1 */}
          <div className=" bg-purple-700 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-lg mb-4">Ideal for small moves</p>
            <p className="text-3xl font-bold mb-4">$99</p>
            <ul className="list-disc">
              <li>Up to 2 hours of service</li>
              <li>1 truck and 2 movers</li>
              <li>Basic packing materials</li>
            </ul>
          </div>

          {/* Plan 2 */}
          <div className=" bg-blue-700 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Standard Plan</h3>
            <p className="text-lg mb-4">Perfect for medium-sized moves</p>
            <p className="text-3xl font-bold mb-4">$199</p>
            <ul className="list-disc">
              <li>Up to 4 hours of service</li>
              <li>1 truck and 3 movers</li>
              <li>Standard packing materials</li>
            </ul>
          </div>

          {/* Plan 3 */}
          <div className=" bg-pink-700 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-lg mb-4">For large and complex moves</p>
            <p className="text-3xl font-bold mb-4">$299</p>
            <ul className="list-disc">
              <li>Up to 8 hours of service</li>
              <li>2 trucks and 4 movers</li>
              <li>Premium packing materials</li>
              <li>Storage options available</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
