import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <main className="flex items-center justify-center h-screen ">
        <div className="px-4 py-16 mx-auto text-center lg:px-8 lg:py-48 max-w-7xl sm:px-6 sm:py-24">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <p className="text-5xl tracking-tight text-blue-500  lg:text-9xl">
                404
              </p>
              <p className="max-sm:w-4/5 mx-auto mt-4 text-lg tracking-tight text-gray-400 max-sm:text-sm">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                className="items-center justify-center max-sm:px-3 px-5 py-2.5   text-center text-white duration-200  rounded-lg max-sm:text-sm   outline-none lg:w-auto text-lg bg-blue-500 "
                to="/"
              >
                <i className="ri-circle-fill text-green-300"></i> Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
