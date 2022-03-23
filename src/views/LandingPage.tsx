import React from "react";
import { useNavigate } from "react-router-dom";
import { SlideA, SlideB, SlideC } from "../components/LandingPage";
import BlockNav from "../components/BlockNav";

const LandingPage = (props: any) => {
  let navigate = useNavigate();

  return (
    <main className="min-h-screen max-w-screen bg-gray-900 text-white">
      <header className="flex justify-center py-4 h-[10vh]">
        <div className="w-8/12 flex justify-between items-center">
          <section className="flex space-x-2 items-center">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p className="border-r-2 border-white" />
            <p>Kids</p>
          </section>

          <section>Logo</section>

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
            <BlockNav className="border-l-2" text="News + Blog" />
            <BlockNav className="" text="Video" />
            <BlockNav className="" text="Series" />
            <BlockNav className="" text="Interactive" />
            <BlockNav className="" text="Community" />
            <BlockNav className="" text="Databank" />
            <BlockNav className="" text="Disney+" />
          </section>
        </nav>
        <p className="text-center py-4 uppercase text-md font-medium">
          Stream star wars on Disney+
        </p>
      </section>

      <section className="flex w-full h-[83vh]">
        <SlideC />
      </section>
    </main>
  );
};

export default LandingPage;
