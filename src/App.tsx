import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";

import LandingPage from "./views/LandingPage";

import Layout from "./containers/Layout";
import Dashboard from "./views/Dashboard";
import FilmDetails from "./views/FilmDetails";
import NoMatch from "./views/NoMatch";
import SignIn from "./views/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="film/:filmId" element={<FilmDetails />} />
          </Route>

          <Route path="/sign_in" element={<SignIn />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
