import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RefreshIcon, XIcon } from "@heroicons/react/outline";

import useFetch from "../utils/hooks/useFetch";

const FilmDetails = () => {
  let navigate = useNavigate();
  let { filmId } = useParams();

  const { loading, data, error } = useFetch(
    `https://swapi.dev/api/films/?search=${filmId}`
  );

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
      <main className="w-full h-full flex flex-cols items-center justify-center">
        <RefreshIcon className="w-6 h-6 animate-spin" />
      </main>
    );
  }

  return (
    <main
      className="w-full h-full flex flex-cols items-center justify-center"
      style={{
        backgroundImage: `url(https://lumiere-a.akamaihd.net/v1/images/pit-droids-main_8b5d6bda.jpeg?region=0%2C0%2C1280%2C720&width=768)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {data && (
        <div className="w-8/12 md:w-6/12 border-2 p-4 bg-white rounded-md space-y-4">
          <section className="flex justify-end">
            <button
              onClick={() => navigate("/app")}
              className="text-red-500 font-bold"
            >
              <XIcon className="w-6 h-6" />
            </button>
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
