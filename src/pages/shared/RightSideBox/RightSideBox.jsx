import Image from "next/image";
import { TbMessage } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

const RightSideBox = () => {
  return (
    <>
      <div className="bg-slate-800 shadow-md p-4 border-b-2 border-gray-700">
        <button className="btn btn-sm h-10 text-white rounded-sm px-12 btn-primary">
          Ask a question
        </button>
      </div>
      {/* 2nd section  */}
      <div className="grid grid-cols-2 justify-items-center rounded-sm gap-0 p-4">
        <div className="bg-slate-800 w-full shadow-md border border-gray-700">
          <div className="text-center py-2 border-blue-600">
            <h4 className="text-blue-600 text-xs">Question</h4>
            <p className="text-2xl font-bold">21</p>
          </div>
        </div>
        <div className="bg-slate-800 w-full shadow-md border border-gray-700">
          <div className="text-center py-2 border-blue-600">
            <h4 className="text-red-600 text-xs">Answers</h4>
            <p className="text-2xl font-bold">21</p>
          </div>
        </div>
        <div className="bg-slate-800 w-full shadow-md border border-gray-700">
          <div className="text-center py-2 border-blue-600">
            <h4 className="text-green-600 text-xs">Best Answers</h4>
            <p className="text-2xl font-bold">21</p>
          </div>
        </div>
        <div className="bg-slate-800 w-full shadow-md border border-gray-700">
          <div className="text-center py-2 border-blue-600">
            <h4 className="text-blue-600 text-xs">Users</h4>
            <p className="text-2xl font-bold">21</p>
          </div>
        </div>
      </div>
      {/* 3rd section  */}
      <div className="mt-2">
        <div
          role="tablist"
          className="tabs border-b-2 border-gray-700 tabs-lifted"
        >
          <a role="tab" className="tab">
            Popular
          </a>
          <a role="tab" className="tab tab-active [--tab-border-color:gray]">
            Answers
          </a>
        </div>
        <div>
          <div className="bg-slate-800 py-6 px-4 border-b border-slate-700">
            <div className="flex gap-3 ">
              <div className="mt-1">
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <Image
                      width={500}
                      height={400}
                      alt="profile"
                      src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-sm">
                  How to approach applying for a job at a company ...
                </p>
                <div className="flex mt-3">
                  <TbMessage />
                  <p className="text-xs ml-4">5 Answers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 pb-5 px-4 border-b border-slate-700">
            <div className="flex gap-3 ">
              <div className="mt-1">
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <Image
                      width={500}
                      height={400}
                      alt="profile"
                      src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-sm">
                  How to approach applying for a job at a company ...
                </p>
                <div className="flex mt-3">
                  <TbMessage />
                  <p className="text-xs ml-4">5 Answers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 py-6 px-4 pb-12 border-b border-slate-700">
            <div className="flex gap-3 ">
              <div className="mt-1">
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <Image
                      width={500}
                      height={400}
                      alt="profile"
                      src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-sm">
                  How to approach applying for a job at a company ...
                </p>
                <div className="flex mt-3">
                  <TbMessage />
                  <p className="text-xs ml-4">5 Answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section  */}
      <div className="bg-slate-800 pt-5 px-4 border-t-2 border-slate-700">
        <div className="flex">
          <FaUserGroup className="" size={21} />
          <h4 className="pl-4"> Top Members</h4>
        </div>
      </div>
    </>
  );
};
export default RightSideBox;
