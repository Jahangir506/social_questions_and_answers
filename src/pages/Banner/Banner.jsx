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
              <h1 className="mb-5 text-center lg:text-start text-5xl max-w-72 text-3xl lg:text-5xl lg:max-w-3xl font-bold">Hello there</h1>
              <p className="mb-5 max-w-72 lg:max-w-3xl text-sm lg:text-base text-justify">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <button className="btn btn-sm h-10 text-white rounded-sm max-w-48 w-full ml-12 lg:ml-0 btn-primary">Create a new account</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
