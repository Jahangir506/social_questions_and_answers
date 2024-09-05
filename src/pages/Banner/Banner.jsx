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
          <div className="w-full flex justify-between items-center">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <button className="btn btn-sm h-10 text-white rounded-sm max-w-48 w-full btn-primary">Create a new account</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
