import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <section className="w-6/12">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Error 404
            </p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
              Oops! The page you're looking for isn't here.
            </h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
              You might have the wrong address, or the page may have moved.
            </p>
            <Link to="/" className="text-blue-600">
              Back to homepage
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-full py-48 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NoMatch;
