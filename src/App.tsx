import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage";

import Layout from "./containers/Layout";
import Dashboard from "./views/Dashboard";
import FilmDetails from "./views/FilmDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="film/:filmId" element={<FilmDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;