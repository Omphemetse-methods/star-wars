import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RefreshIcon, HomeIcon } from "@heroicons/react/outline";

import useFetch from "../utils/hooks/useFetch";

const FilmDetails = () => {
  let navigate = useNavigate();
  let { filmId } = useParams();

  const { loading, data, error } = useFetch(
    `https://swapi.dev/api/films/?search=${filmId}`
  );

  const [slide, setSlide] = useState(3);

  const backgrounds = [
    "https://lumiere-a.akamaihd.net/v1/images/cad-bane-episodes-new-swcom-slide-mobile-_2_77009884.jpeg?region=0,0,1024,626&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/marchion-ro-concept-art-5450_80572382.jpeg?region=0%2C17%2C1281%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/62335c2ddbbde50001f2766b-image_75531ce1.jpeg?region=0%2C0%2C1536%2C864",
    "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-singlehero-b-mobile_31e06718.jpeg?region=0,0,640,1000",
  ];

  // slide show effect
  /**useEffect(() => {
    setTimeout(() => {
      if (slide === backgrounds.length) setSlide(0);
      else setSlide((state) => state + 1);
    }, 5 * 1000);
  }, [slide]);*/

  if (error) {
    return (
      <main className="w-full h-full flex flex-col items-center justify-center space-y-3">
        <div className="text-center">
          <p>
            Failed to fetch movie <span className="font-bold">{filmId}</span>
          </p>
          <p>Make sure the url provided matches</p>
        </div>
        <button className="btn-primary px-12">Home page</button>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="w-screen h-screen flex flex-cols items-center justify-center">
        <RefreshIcon className="w-6 h-6 animate-spin" />
      </main>
    );
  }

  return (
    <main
      className="w-full h-full flex flex-cols items-center justify-center"
      style={{
        backgroundImage: `url(${backgrounds[slide]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {data && (
        <div className="w-8/12 md:w-6/12 border-2 p-4 bg-white rounded-md space-y-4">
          <section className="flex justify-end">
            <button onClick={() => navigate("/")}>x</button>
          </section>

          <h2 className="text-3xl font-bold text-center">
            {data.results[0].title}
          </h2>

          <section>
            <p>Opening crawl</p>
            <p className="px-3">{data.results[0].opening_crawl}</p>
          </section>

          <section>
            <p>Director </p>
            <p className="px-3">{data.results[0].director}</p>
          </section>

          <section>
            <p>Producrer</p>
            <p className="px-3">{data.results[0].producer}</p>
          </section>

          <section>
            <p>Date</p>
            <p className="px-3">{data.results[0].release_date}</p>
          </section>
        </div>
      )}
    </main>
  );
};

export default FilmDetails;
