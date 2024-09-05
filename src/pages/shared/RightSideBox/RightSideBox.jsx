import Image from "next/image";
import { TbMessage } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

const RightSideBox = () => {
  return (
    <>
      <div className="bg-slate-800 shadow-md p-7 border-b-2 border-gray-700">
        <button className="btn btn-sm h-10 text-white rounded-sm max-w-48 w-full btn-primary">
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
                  <div className="w-8 rounded-full">
                    <Image
                      width={500}
                      height={400}
                      alt="profile"
                      src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-3">
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
          <div className="bg-slate-800 py-6 px-4 border-b border-slate-700">
            <div className="flex gap-3 ">
              <div className="mt-1">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <Image
                      width={500}
                      height={400}
                      alt="profile"
                      src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-3">
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
          <div className="bg-slate-800 py-6 px-4 pb-10 border-b border-slate-700">
            <div className="flex gap-3 ">
              <div className="mt-1">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <Image
                      width={500}
                      height={400}
                      alt="profile"
                      src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-3">
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
      <div className="bg-slate-800 pt-9 px-4 border-t-2 border-slate-700">
        <div className="flex">
          <FaUserGroup className="" size={21} />
          <h4 className="pl-4"> Top Members</h4>
        </div>
        <div className="py-5">
          <div className="flex gap-3 py-4">
            <div>
              <div className="avatar">
                <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring-1 ring-offset-2">
                  <Image
                    width={500}
                    height={400}
                    alt="profile"
                    src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="text-base">Md. Jahangir Alam</h4>
              <div className="flex-col mt-1">
                <p className="text-xs flex ml-1">
                  <TbMessage className="mt-0.5" />
                  <small className="mx-1.5 mb-1"> 5 Questions</small>{" "}
                  <small>518 Points</small>
                </p>
                <button className="py-[1px] px-1.5 text-white text-xs bg-[#D9A34A]">
                  Enlightened
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 py-4">
            <div>
              <div className="avatar">
                <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring-1 ring-offset-2">
                  <Image
                    width={500}
                    height={400}
                    alt="profile"
                    src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="text-base">Md. Jahangir Alam</h4>
              <div className="flex-col mt-1">
                <p className="text-xs flex ml-1">
                  <TbMessage className="mt-0.5" />
                  <small className="mx-1.5 mb-1"> 5 Questions</small>{" "}
                  <small>518 Points</small>
                </p>
                <button className="py-[1px] px-1.5 text-white text-xs bg-[#D9A34A]">
                  Enlightened
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 py-4">
            <div>
              <div className="avatar">
                <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring-1 ring-offset-2">
                  <Image
                    width={500}
                    height={400}
                    alt="profile"
                    src="https://backiee.com/static/wallpapers/1000x563/403302.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="text-base">Md. Jahangir Alam</h4>
              <div className="flex-col mt-1">
                <p className="text-xs flex ml-1">
                  <TbMessage className="mt-0.5" />
                  <small className="mx-1.5 mb-1"> 5 Questions</small>{" "}
                  <small>518 Points</small>
                </p>
                <button className="py-[1px] px-1.5 text-white text-xs bg-[#D9A34A]">
                  Enlightened
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4th section  */}
      <div className="bg-slate-800 pt-9 px-4 border-t-2 border-slate-700">
        <div className="flex">
          <FaUserGroup className="" size={21} />
          <h4 className="pl-4">Trending Tags</h4>
        </div>
        <div className="py-8 max-w-sm flex-col space-x-1 space-y-1">
          <button className="btn btn-outline hover:bg-primary btn-sm rounded-sm">
            analytics
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">
            programming
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">
            programming
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">
            programming
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">program</button>
          <button className="btn btn-outline btn-sm rounded-sm">french</button>
          <button className="btn btn-outline btn-sm rounded-sm">fb</button>
          <button className="btn btn-outline btn-sm rounded-sm">
            facebook
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">life</button>
          <button className="btn btn-outline btn-sm rounded-sm">partner</button>
          <button className="btn btn-outline btn-sm rounded-sm">life</button>
          <button className="btn btn-outline btn-sm rounded-sm">partner</button>
          <button className="btn btn-outline btn-sm rounded-sm">google</button>
          <button className="btn btn-outline btn-sm rounded-sm">
            bangladesh
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">
            developer
          </button>
          <button className="btn btn-outline btn-sm rounded-sm">
            front end developer
          </button>
        </div>
      </div>
    </>
  );
};
export default RightSideBox;
