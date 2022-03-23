import React from "react";

const SlideC = () => {
  const background =
    "https://lumiere-a.akamaihd.net/v1/images/santo-hero-desktop_e1f3909b.jpeg?region=0,0,2048,870&width=1920";

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
      <section className="h-full flex flex-col justify-center items-center">
        <div className="w-6/12 flex flex-col items-center justify-center">
          <p className="text-5xl font-bold text-center  pb-6 uppercase">
            Krrsantan attacks in han solo & chewbacca
          </p>

          <p className="pb-4 text-2xl font-medium text-center">
            Its not wise to upset a Wookiee. Especially if his name is Krrsantan
          </p>

          <button
            onClick={() =>
              window.open(
                "https://www.starwars.com/news/marvel-june-2022-star-wars-comics-exclusive"
              )
            }
            className="btn-primary px-20 py-3 bg-orange-500 hover:bg-orange-600 font-bold text-2xl"
          >
            Read more
          </button>
        </div>
      </section>
    </div>
  );
};

export default SlideC;
