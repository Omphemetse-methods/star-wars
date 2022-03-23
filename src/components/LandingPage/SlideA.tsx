import React from "react";

const SlideA = () => {
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/cad-bane-episodes-new-swcom-slide-desktop_2_b5ebb5e5.jpeg?region=0,0,2048,870&width=1920";

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
      <section className="absolute bottom-0 left-0 pb-40 pl-40">
        <p className="text-3xl font-medium w-9/12 pb-6 uppercase">
          9 essentials cad bane episodes to watch on Disney+
        </p>

        <p className="text-2xl pb-4">
          He'll take on any job at the right price
        </p>

        <button className="btn-primary px-20 py-3 bg-red-500 hover:bg-red-600 font-bold text-2xl">
          Read more
        </button>
      </section>
    </div>
  );
};

export default SlideA;
