/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import { SlideC } from "components/LandingPage";
import BlockNav from "components/BlockNav";
import logo from "assets/logo.png";

const LandingPage = (props: any) => {
  let navigate = useNavigate();

  return (
    <main id="main" className="h-screen max-w-screen bg-gray-900 text-white">
      <header className="flex justify-center py-4 h-[15vh]">
        <div className="w-full flex items-center justify-between px-4 md:w-8/12 md:flex md:justify-between md:items-center">
          <img alt="logo" className="h-10 w-20 object-cover" src={logo} />
          <section className="flex items-center space-x-2">
            <button
              id="login_button"
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

      <section className="hidden md:block md:flex md:flex-col md:justify-center md:h-[15vh]">
        <nav className="border-t-2 w-full flex justify-center ">
          <section className="w-11/12 md:w-10/12 grid grid-cols-6">
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
              text="Disney+"
              url="https://www.starwars.com/disneyplus"
            />
          </section>
        </nav>
        <p className="text-center py-4 uppercase text-md font-medium">
          Stream star wars on Disney+
        </p>
      </section>

      <section className="flex w-full h-full h-[85vh] md:h-[70vh]">
        <SlideC />
      </section>
    </main>
  );
};

export default LandingPage;
