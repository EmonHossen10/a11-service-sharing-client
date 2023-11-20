import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div className="bg-black text-white p-10 rounded-xl ">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}

        
      >
         <section className="flex justify-around">
         <div className="text-3xl font-bold space-y-4" >
        <h3 className="text-xl md:text-3xl" >Our total clients</h3>
        <p className="text-4xl text-center" > {counter && <CountUp start={0} end={600} duration={2} delay={0} />} +</p>
        </div>
        {/* nd part  */}
        <div className="text-3xl font-bold space-y-4" >
        <h3  className="text-xl md:text-3xl" >Our total Sales</h3>
        <p className="text-4xl text-center" > {counter && <CountUp start={0} end={1500} duration={2} delay={0} />} +</p>
        </div>
         </section>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
