import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAuth } from "../context/AuthProvider";

const SignUp = (props) => {
  const { authError, authLoading, registerNewUser } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://lumiere-a.akamaihd.net/v1/images/rodian-main_de29c78f.jpeg?region=0%2C0%2C1280%2C721&width=768)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div></div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                Star-Wars
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign up to access your account
              </p>
            </div>

            {authError && (
              <p className="text-red-500 text-center pt-4">
                {JSON.stringify(authError)}
              </p>
            )}

            <div className="mt-8">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  password: Yup.string()
                    .min(6, "must be greater than 6 characters")
                    .max(128, "must ne less than 128 characters")
                    .required("Required"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                })}
                onSubmit={(values) => {
                  registerNewUser(values);
                }}
              >
                <Form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <Field
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <ErrorMessage name="password">
                      {(msg) => <p className="text-red-500">{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <p className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
                        Forgot password?
                      </p>
                    </div>

                    <Field
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <ErrorMessage name="password">
                      {(msg) => <p className="text-red-500">{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      {authLoading ? "Loading ..." : "Sign Up"}
                    </button>
                  </div>

                  <p className="mt-6 text-sm text-center text-gray-400">
                    Have an account yet?{" "}
                  </p>
                  <section className="flex justify-center">
                    <Link
                      to="/sign_in"
                      className="text-blue-500 focus:outline-none focus:underline hover:underline"
                    >
                      Sign In{" "}
                    </Link>
                  </section>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
