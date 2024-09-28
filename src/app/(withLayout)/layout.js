import Footer from "@/pages/shared/Footer/Footer";
import UnderSubFooter from "@/pages/shared/Footer/UnderSubFooter";
import Navbar from "@/pages/shared/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <div className="fixed z-50 w-full bg-base-200 lg:w-full border-b border-slate-500">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
      <div>{children}</div>
      <div className="bg-base-200 border-t  border-slate-700">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
        <div className="bg-base-200 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <UnderSubFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default layout;
