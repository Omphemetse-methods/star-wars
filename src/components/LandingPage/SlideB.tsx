import React from "react";

const SlideB = () => {
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/pykes-new-swcom-slide-desktop-_2_b682933d.jpeg?region=0,0,2048,870&width=1920";

  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="h-full flex justify-end">
        <div className="w-4/12 flex flex-col items-start justify-center">
          <p className="text-5xl font-bold w-9/12 pb-6 uppercase">
            Who are the pykes
          </p>

          <p className="pb-4 text-2xl font-medium w-6/12">
            Explore the inner workings of one of the galaxy's most notorious
            crime syndicates
          </p>

          <button className="btn-primary px-20 py-3 bg-green-500 hover:bg-green-600 font-bold text-2xl">
            Read more
          </button>
        </div>
      </section>
    </div>
  );
};

export default SlideB;
