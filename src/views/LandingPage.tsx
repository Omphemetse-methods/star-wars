import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlideA, SlideB, SlideC } from "../components/LandingPage";
import BlockNav from "../components/BlockNav";

const LandingPage = (props: any) => {
  let navigate = useNavigate();

  const slides = [<SlideA />, <SlideB />, <SlideC />];
  const [slideIndex, setSlideIndex] = useState(0);

  // slide show
  useEffect(() => {
    setSlideIndex(1);
  }, [slideIndex]);

  return (
    <main className="min-h-screen max-w-screen bg-gray-900 text-white">
      <header className="flex justify-center py-4 h-[10vh]">
        <div className="w-8/12 flex justify-between items-center">
          <img
            alt="logo"
            className="h-4 w-4 object-cover"
            src="https://lumiere-a.akamaihd.net/v1/images/b-boba-favicon-sw-512x512_e7aeaa0b.png?region=0%2C0%2C512%2C512"
          />

          <section className="flex items-center space-x-2">
            <button
              className="btn-primary px-12"
              onClick={() => navigate("sign_in")}
            >
              Log In
            </button>
            <button className="btn-primary" onClick={() => navigate("sign_up")}>
              Sign Up
            </button>
          </section>
        </div>
      </header>

      <section className="h-[7vh] flex flex-col justify-center">
        <nav className="border-t-2 w-full flex justify-center ">
          <section className="w-11/12 md:w-10/12 grid grid-cols-8">
            <BlockNav
              className="border-l-2"
              text="News + Blog"
              url="https://www.starwars.com/news"
            />
            <BlockNav
              className=""
              text="Video"
              url="https://www.starwars.com/video"
            />
            <BlockNav
              className=""
              text="Films"
              url="https://www.starwars.com/films"
            />
            <BlockNav
              className=""
              text="Series"
              url="https://www.starwars.com/series"
            />
            <BlockNav
              className=""
              text="Interactive"
              url="https://www.starwars.com/interactive"
            />
            <BlockNav
              className=""
              text="Community"
              url="https://www.starwars.com/community"
            />
            <BlockNav
              className=""
              text="Databank"
              url="https://www.starwars.com/databank"
            />
            <BlockNav
              className=""
              text="Disney+"
              url="https://www.starwars.com/disneyplus"
            />
          </section>
        </nav>
        <p className="text-center py-4 uppercase text-md font-medium">
          Stream star wars on Disney+
        </p>
      </section>

      <section className="flex w-full h-[83vh]">{slides[slideIndex]}</section>
    </main>
  );
};

export default LandingPage;
