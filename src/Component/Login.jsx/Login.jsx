import React, { useState } from "react";
import { FaFacebookSquare, FaGoogle, FaLinkedin } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import DropdownMenu from "../AccountDropdown/DropdownMenu";
import { Signup } from "./Signup";
import axios from "axios";
import { API_TOKEN } from "../Token/Token";

export const Login = ({ isOpen, setIsOpen }) => {
  const [logins, setLogins] = useState({
    phone: "",
    password: "",
  });
  const [showModals, setShowModals] = useState(false);

  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    setShowModals(true);
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    console.log(logins);

    var phone = '9131582414'
    var password = '9131582414'

  

  let config = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  let formData = new FormData();
  formData.append('accesskey', '90336');
  formData.append('mobile', phone );
  formData.append('password', password );
  formData.append('fcm_id', 'YOUR_FCM_ID');

  axios
    .post('https://grocery.intelliatech.in/api-firebase/login.php', formData, config)
    .then((res) => {
      console.log(res);
      if (res.data.status) {
        navigate('/');
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
      <div className="flex xs:w-20 sm:mr-3 md:w-24 h-[30px] rounded-lg md:px-2 md:mt-[-22px] xs:mt-3 bg-white">
        <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <section className="h-screen">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 xs:mt-12  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="http://grocery.intelliatech.com/dist/img/logo.png"
                className="xs:w-[300px] md:w-[600px] sm:w-[600px]"
                alt="login image"
              />
            </div>

            <div className="mb-12 mr-10 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg font-medium text-lightgray">
                  Sign in with
                </p>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <FaFacebookSquare className="text-lg ml-2" />
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <FaLinkedin className="text-lg ml-2" />
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <FaGoogle className="text-lg ml-2" />
                </button>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-light_gray after:mt-0.5 after:flex-1 after:border-t after:border-light_gray">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="phone"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="phone"
                    onChange={(e) =>
                      setLogins({ ...logins, phone: e.target.value })
                    }
                    name="phone"
                    value={logins.phone}
                    placeholder="Phone"
                  />
                  <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Phone
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setLogins({ ...logins, password: e.target.value })
                    }
                    value={logins.password}
                    name="password"
                  />
                  <label
                    for="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <NavLink to={"/reset"}>
                    <a className="cursor-pointer xs:ml-8">Forgot password?</a>
                  </NavLink>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block rounded bg-lime px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Login
                  </button>
                  {/* <NavLink to={"/payment"}>
                    <button
                      type="button"
                      className="inline-block rounded bg-lime px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Login
                    </button>
                  </NavLink> */}

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <a
                      href=""
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      onClick={handleShow}
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showModals ? <Signup /> : " "}
    </>
  );
};
