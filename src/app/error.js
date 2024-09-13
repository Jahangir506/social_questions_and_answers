"use client";

import Image from "next/image";

const error = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-center">
        <div className="space-y-4">
          <h2 className="text-8xl font-bold text-red-600">Oops!</h2>
          <h5 className="text-red-500">404-PAGE NOT FOUND!</h5>
          <p className="text-base font-semibold">
            The page you are looking for is not here.
          </p>
          <div className="">
            <button className="bg_btn-primary text-white px-3 rounded-sm py-1">
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default error;
