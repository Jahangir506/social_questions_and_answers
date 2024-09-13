"use client";

import Link from "next/link";

const error = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-center">
        <div className="space-y-4">
          <h2 className="text-8xl font-bold text-red-600">Oops!</h2>
          <h5 className="text-red-600">404 - PAGE NOT FOUND!</h5>
          <p className="text-base font-semibold">
            The page you are looking for is not here.
          </p>
          <div className="">
            <Link href="/">
              <button className="bg_btn-primary border border-[#02C8E6] hover:bg-[#0285DD] hover:border-[#0285DD] text-white px-3 rounded-sm py-1">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default error;
