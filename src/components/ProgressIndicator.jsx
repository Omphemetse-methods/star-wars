import React from "react";

const Loader = () => (
  <div className="fixed top-0 left-0 z-50 block w-full h-full bg-white opacity-75">
    <div className="relative h-1 mb-4 overflow-hidden bg-pink-200 rounded w-full">
      <div className="absolute top-0 w-full h-1 m-0 bg-pink-500 bar1 transform -left-full" />
      <div className="absolute top-0 w-full h-1 m-0 bg-pink-500 bar2 transform -left-full" />
    </div>
  </div>
);

export default Loader;
