const Services = () => {
  return (
    <section id="Services" className="bg-brand-beige">
      <div className=" justify-center items-center lg:p-10 pt-10">
        <h1 className="text-center text-4xl font-wedding text-brand-lavender ">
          My Services
        </h1>
        <div className="flex pt-5 max-lg:flex-col max-lg:px-5 max-lg:gap-5">
          <div className="lg:w-1/2">
            <div className=" max-lg:px-2 px-5 text-center">
              <h1 className="text-center font-noto text-3xl text-brand-brown">
                Basic
              </h1>
              <p className="font-wix text-xl text-brand-lavender">
                Pricing: the price of your basic nails will vary based on the
                design but will range between $25 to $30
              </p>
              <div className="flex flex-col items-center text-lg">
                <p className="p-5 font-wix text-brand-brown">
                  Basic designs include:
                </p>
                <ul className="list-disc list-inside flex flex-col items-start font-wix">
                  <li>solid color</li>
                  <li>french tip (+ modified versions)</li>
                  <li>simple line work</li>
                  <li>dots</li>
                </ul>
              </div>
              <p className="pt-12 font-wix text-xl text-brand-lavender italic">
                *Must be same design on all nails to be considered basic
              </p>
            </div>
          </div>
          <div className="max-lg:border-t max-lg:py-10 lg:border-l border-[#c2b7a6] lg:w-1/2 text-center px-5">
            <h1 className="text-center font-noto text-3xl text-brand-brown">
              Intricate
            </h1>
            <p className="font-wix text-xl text-brand-lavender">
              Pricing: the price of your intricate nails will vary based on the
              design but will range between $35 to $50
            </p>
            <div className="flex flex-col items-center text-lg">
              <p className="p-5 font-wix text-brand-brown">
                Intricate designs include:
              </p>
              <ul className="list-disc list-inside flex flex-col items-start font-wix">
                <li>multicolor</li>
                <li>ombré</li>
                <li>complex designs</li>
                <li>flowers</li>
                <li>gems</li>
              </ul>
            </div>
            <p className="pt-7 font-wix text-xl text-brand-lavender italic">
              *The more complicated the set, the higher the price. Caps at $50
            </p>
          </div>
        </div>
        <p className="text-center max-lg:p-5 lg:pt-10 text-brand-brown font-noto text-xl">
          If you have any questions about the pricing or want to know how much
          your idea will cost, please don&apos;t hesitate to contact me!
        </p>
      </div>
    </section>
  );
};

export default Services;
