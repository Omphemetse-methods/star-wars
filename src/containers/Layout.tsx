import React, { useState, useEffect, Fragment } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { HomeIcon, LogoutIcon } from "@heroicons/react/outline";

import { useAuth } from "context/AuthProvider";

import { useDispatch } from "react-redux";
import { addSearchHistoryItem } from "redux/actions";

import MovieType from "utils/types/Movie";
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-3 py-2 h-[8vh] border-b-2 border-gray-200">
        {/* home button  */}
        <button className="" onClick={() => navigate("/app")}>
          <HomeIcon className="w-6 h-6 text-purple-500 hover:text-purple-600" />
        </button>

        {/* search  */}
        <>
          {location.pathname === "/app" ? (
            <div className="relative space-y-2">
              <input
                className="border-2 border-gray-100 p-2 w-[200px] md:w-[400px] focus:outline-none rounded-md focus:outline-none focus:border-purple-100"
                placeholder="Movie name..."
                onChange={handleInputChange}
              />
              <section className="absolute w-full p-3 shadow-md bg-white border-2 border-gray-100 shadow-lg">
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
                    <div>
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
                            <p className="hover:bg-gray-200 py-2 border-b-2">
                              {movie.title}
                            </p>
                          </li>
                        ))}
                      </ul>

                      <>
                        {movies.length === 0 && (
                          <p className="text-center">No film found</p>
                        )}
                      </>
                    </div>
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
          <Menu as="div" className="relative">
            <Menu.Button>
              <p className="flex flex-cols items-center justify-center h-10 w-10 rounded-full btn-primary text-white uppercase ring-1 ring-indigo-200 shadow-md">
                {currentUser.profile.email.charAt(0)}
              </p>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-40 md:w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 p-3  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {() => (
                    <button
                      className="flex space-x-2 items-center hover:bg-violet-500 hover:text-white focus:outline-none w-full"
                      onClick={() => signOut()}
                    >
                      <LogoutIcon className="w-4 h-4" />
                      <p>Log out</p>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <section className="h-full pt-[8vh]">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
