import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "context/AuthProvider";
import PrivateRoute from "containers/PrivateRoute";

import ProgressIndicator from "components/ProgressIndicator";

const LandingPage = React.lazy(() => import("views/LandingPage"));

const Layout = React.lazy(() => import("containers/Layout"));
const Dashboard = React.lazy(() => import("views/Dashboard"));
const FilmDetails = React.lazy(() => import("views/FilmDetails"));
const NoMatch = React.lazy(() => import("views/NoMatch"));
const SignIn = React.lazy(() => import("views/SignIn"));
const SignUp = React.lazy(() => import("views/SignUp"));

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<ProgressIndicator />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/app"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="film/:filmId" element={<FilmDetails />} />
            </Route>

            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
