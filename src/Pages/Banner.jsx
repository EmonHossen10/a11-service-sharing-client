const Banner = () => {
  return (
    <div className="carousel w-full max-h-screen">
      <div id="slide1" className="carousel-item relative w-full     ">
        <img
          src="https://i.ibb.co/N3vdRmH/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van-637285-2293.jpg"
          className="w-full brightness-50 "
        />
        <div className="absolute   transform -translate-y-1/2  lg:left-[24%] top-1/2">
            {/* text part */}
           <section className="md:space-y-3  font-poppins flex flex-col   items-center  " >
            <img className="w-[200px] mb-[-30px] mt-10  " src="https://i.ibb.co/gz0vvQ4/download-removebg-preview-1.png" alt="" />
            <p className="text-[#FFDC39] md:text-xl " >Moving With Us</p>
           <h2 className=" text-2xl md:text-4xl lg:text-6xl  text-white font-bold" > Need Help Moving ?</h2>
           <img className=" py-4  w-9/12 mr-5 lg:w-full  " src="https://i.ibb.co/ky07Xhk/h2-slider-img-2.png" alt="" />
           <div className="flex pb-20 md:pb-14  gap-2">
            <button className="  bg-white md:w-44 font-semibold md:h-14 text-xs md:text-base p-2  hover:brightness-90 " >Buy Now</button>
            <button className="bg-[#FFDC39] md:w-44 font-semibold md:h-14 text-xs md:text-base p-2 hover:brightness-90 " >More Info</button>
           </div>

           </section>
           
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-4xl text-white">
            ←
          </a>
          <a href="#slide2" className=" text-4xl text-white ">
            →
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/xD6m5rJ/low-angle-delivery-man-with-package-list-23-2148590677.jpg"
          className="w-full brightness-50"
        />
        <div className="absolute   transform -translate-y-1/2  lg:left-[15%] top-1/2">
            {/* text part */}
        <section className="  font-poppins flex  gap-3 items-center  " >
           <div>
           <img className="w-[300px] pb-[-30px] mt-10  " src="https://i.imgur.com/q2pzp5K.png" alt="" />
           </div>

            <div className="mt-20 md:space-y-5">
            <p className="text-[#FFDC39] md:text-xl text-xs" >We keep your product clean !</p>
           <h2 className=" text-xl md:text-4xl lg:text-6xl  text-white font-bold" >Do you need safe <br /> storage space ?</h2>
           <img className=" py-2 md:py-4 w-9/12 mr-5 lg:w-full  " src="https://i.ibb.co/ky07Xhk/h2-slider-img-2.png" alt="" />
           <div className="flex  pb-20 md:pb-14  gap-2">
            <button className="bg-white md:w-44 font-semibold md:h-14 text-xs md:text-base p-2  hover:brightness-90 " >Buy Now</button>
          
           </div>
            </div>
            

           </section>
           
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-4xl text-white">
            ←
          </a>
          <a href="#slide3" className=" text-4xl text-white ">
            →
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/LYhrc6n/young-delivery-men-showing-ok-sign-near-delivery-car-23-2148944557.jpg"
          className="w-full  brightness-50"
        />
        <div className="absolute   transform -translate-y-1/2  lg:left-[24%] top-1/2">
            {/* text part */}
           <section className="md:space-y-2 relative text-center font-poppins flex flex-col   items-center  " >
            
             
           <h2 className=" text-2xl md:text-4xl lg:text-8xl  text-[#FFDC39] font-bold" >30 % </h2>
           <h2 className=" text-2xl md:text-4xl lg:text-5xl  text-white font-bold" > Discount Now !!!</h2>
           <img className=" py-4  w-9/12 mr-5 lg:w-full  " src="https://i.ibb.co/ky07Xhk/h2-slider-img-2.png" alt="" />
           <div className="flex pb-20 md:pb-14  gap-2">
            <button className="  bg-white md:w-44 font-semibold md:h-14 text-xs md:text-base p-2  hover:brightness-90 " >Buy Now</button>
            
           </div>

           </section>
           
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-4xl text-white">
            ←
          </a>
          <a href="#slide1" className=" text-4xl text-white ">
            →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
