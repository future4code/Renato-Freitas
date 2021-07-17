import React from "react";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import {BASE_URL} from "../../constants/urls"
import axios from "axios"


export const SignUpPage = () => {
  const initialState = { username: "", email: "", password: "", };
  const [form, onChange, clear] = useForm({initialState});
  const history = useHistory();
  useUnprotectedPage();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp();
    console.log(form);
  };

  const signUp = () => {
    const body = {
      username: form.username,
      email: form.email,
      password: form.password
    }

    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        history.push("/posts")
      })
      .catch((err) => {
        alert(err);
        console.log(body)
      });
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col m-auto w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mt-20 m-auto">
        <div className="self-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          <h1>Cadastro</h1>
        </div>
        <div className="mt-8">
          <form onSubmit={onSubmitForm} autoComplete="off">
            <div className="flex flex-col m-2">
              <div className="flex relative p-2">
                <input
                  required
                  name={"username"}
                  value={form.username}
                  onChange={onChange}
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome"
                />
              </div>
              <div className="flex relative p-2">
                <input
                  required
                  type={"email"}
                  name={"email"}
                  value={form.email}
                  onChange={onChange}
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col m-2 p-2">
              <div className="flex relative">
                <input
                  required
                  type="password"
                  name={"password"}
                  value={form.password}
                  onChange={onChange}
                  className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Senha"
                />
              </div>
            </div>
            <div className="flex w-full flex-col m-2 justify-center items-center">
              <button
                type={"submit"}
                className="m-2 py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-purple-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Fazer cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
