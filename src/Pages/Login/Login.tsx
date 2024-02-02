import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginInterface } from "./Login.types";
import { makeToast } from "../../Common/Toast";

const Login = () => {
  // For handling forms and their validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInterface>();

  const handleLogin: SubmitHandler<loginInterface> = (data) => {
    console.log(data);
    makeToast("success", "Login Success");
  };
  return (
    <>
      <section className="w-full h-full">
        <div className="flex h-full w-full">
          {/* Login Section */}
          <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-blue-500">
                  Login in.
                </h2>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg text-neutral-600 bg-gray-50 focus:outline-none  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          {...register("email", {
                            required: "Enter email",
                            pattern: {
                              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                              message: "Enter valid email",
                            },
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p className="rounded-md w-full  py-2  text-xs font-medium text-red-500 ">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          {...register("password", {
                            required: "Enter password",
                            pattern: {
                              value:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                              message: `- at least 8 characters
                          - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                          - Can contain special characters`,
                            },
                          })}
                          type="password"
                          autoComplete="current-password"
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg text-neutral-600 bg-gray-50 focus:outline-none  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                      {errors.password && (
                        <p className=" rounded-md w-full  py-2  text-xs font-medium text-red-500 ">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Login in
                      </button>
                    </div>
                  </form>
                  <div className="relative my-8  ">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-center text-gray-500 sm:my-5">
              Dont have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:text-blue-600">
                SignUp
              </Link>
            </p>
          </div>
          {/* Image Section */}
          <div className="h-full w-full max-sm:hidden px-6 py-4 ">
            <img
              className="w-full h-full contain rounded-lg"
              src={login}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
