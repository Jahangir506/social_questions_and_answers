import Banner from "@/pages/Banner/Banner";
import HomePage from "@/pages/Home/HomePage.jsx";
import LeftSideRoute from "@/pages/shared/LeftSideRoute/LeftSideRoute";
import RightSideBox from "@/pages/shared/RightSideBox/RightSideBox";

export default function Home({ children }) {
  return (
    <>
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <div className="max-w-7xl  mx-auto">
            <div className="grid grid-cols-10 gap-2.5">
              <div className="col-span-2 hidden lg:flex pt-16">
                <LeftSideRoute />
              </div>
              <div className="col-span-full lg:col-span-6 bg-gray-800 border-0 lg:border border-gray-700">
                <HomePage />
              </div>
              <div className="col-span-2 h-fit hidden lg:grid  border border-slate-700">
                <RightSideBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
