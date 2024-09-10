import "../../app/globals.css"

const Banner = () => {
  return (
    <>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://backiee.com/static/wallpapers/1000x563/199644.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content pt-24 w-full text-neutral-content">
          <div className="w-full lg:flex flex-row justify-between items-center">
            <div className="max-w-2xl ">
              <h1 className="mb-5 text-center lg:text-start text-3xl lg:text-5xl  font-bold">
                Hello there
              </h1>
              <p className="text-sm lg:text-base text-justify">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-sm h-10 bg_btn-primary hover:bg-[#0285DD] text-white rounded-sm btn-primary">
                Create a new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
