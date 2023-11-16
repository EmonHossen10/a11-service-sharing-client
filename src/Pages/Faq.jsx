const Faq = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">FAQ Section</h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q: What services do you offer?
        </div>
        <div className="collapse-content">
          <p>
            A: We offer a comprehensive range of moving services including
            packing, loading, transportation, unloading, and storage options.
            Our goal is to provide a complete solution for your moving needs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q: How do I get a moving quote?
        </div>
        <div className="collapse-content">
          <p>
            A: You can get a moving quote by contacting us through our website
            or giving us a call. We'll gather information about your move and
            provide you with a customized quote based on your specific
            requirements.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q: Do you offer packing services?
        </div>
        <div className="collapse-content">
          <p>
            A: Yes, we offer professional packing services to ensure your
            belongings are securely packed for the move. Our experienced team
            uses quality packing materials to safeguard your items during
            transportation.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q: Can I track my belongings during the move?
        </div>
        <div className="collapse-content">
          <p>
            A: Yes, we provide tracking options for our moving services. You can
            inquire about the status and location of your belongings during the
            entire moving process for added peace of mind.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Q: What measures do you take to ensure the safety of my items?
        </div>
        <div className="collapse-content">
          <p>
            A: We take every precaution to ensure the safety of your items. Our
            team is trained to handle items with care, and we use proper packing
            techniques and secure transportation to minimize the risk of damage
            during the move.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
