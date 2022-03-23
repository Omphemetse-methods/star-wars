import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/outline";

import { useAuth } from "../context/AuthProvider";

import { useDispatch } from "react-redux";
import { addSearchHistoryItem } from "../redux/actions";

import MovieType from "../utils/types/Movie";
import SearchHistory from "./SearchHistory";

const Layout = () => {
  const { signOut, currentUser } = useAuth();

  let location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  //
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);

  // store search values from the input field
  const [search, setSearch] = useState("");

  // fetch movies for every key stroke from the input field
  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);

      try {
        const resp = await fetch(
          `https://swapi.dev/api/films/?search=${search}`
        );
        const data = await resp.json();

        // update movies array state
        setMovies(data.results);
      } catch (err) {
        console.log("error:", err);
        //setError(err);
      } finally {
        setLoading(false);
      }
    };

    // we fetch movies only when there is atleast one character
    if (search !== "") handleSearch();
  }, [search]);

  // sync search input values with state and search in useEffect
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="max-w-screen max-h-screen h-[100vh]">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-3 py-2 h-[10vh] border-b-2 border-gray-200">
        {/* home button  */}
        <button className="" onClick={() => navigate("/app")}>
          <HomeIcon className="w-6 h-6 text-purple-500 hover:text-purple-600" />
        </button>

        {/* search  */}
        <>
          {location.pathname === "/app" ? (
            <div className="relative space-y-2">
              <input
                className="border-2 p-2 w-[300px] md:w-[400px] focus:outline-none rounded-md focus:outline-none focus:border-purple-100"
                placeholder="Movie name..."
                onChange={handleInputChange}
              />
              <section className="absolute w-full p-3 shadow-md bg-white border-2 border-gray-100 shadow-lg rounded-md">
                <>
                  {loading && search !== "" ? (
                    <p>Searching for {search}</p>
                  ) : null}
                </>

                <>
                  {loading === false && search === "" ? (
                    <SearchHistory />
                  ) : null}
                </>

                <>
                  {loading === false && movies && search !== "" ? (
                    <ul>
                      {movies.map((movie) => (
                        <li
                          key={movie.title}
                          className="cursor-pointer"
                          onClick={() => {
                            dispatch(addSearchHistoryItem(movie));

                            setMovies([]);
                            setSearch("");

                            // navigate to a page that display film full details
                            navigate(`film/${movie.title}`);
                          }}
                        >
                          <p className="hover:bg-gray-200 py-2">
                            {movie.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              </section>
            </div>
          ) : (
            <p />
          )}
        </>

        {/*login in details*/}
        <div className="flex items-center space-x-4">
          <p className="flex flex-cols items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white uppercase ring-1 ring-indigo-200">
            {currentUser.profile.email.charAt(0)}
          </p>
          <button className="btn-primary px-4 py-2" onClick={() => signOut()}>
            Log out
          </button>
        </div>
      </header>

      <section className="h-full pt-[10vh]">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
