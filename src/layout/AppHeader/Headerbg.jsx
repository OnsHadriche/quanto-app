const Headerbg = () => {
  return (
    <div className="container-xxl  hero-header">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-white mb-4 animated slideInDown">
              Not sure how to use ?
              <br />
              <span> don't worry! </span>
            </h1>
            <p className="text-white pb-3 animated slideInDown">
              read our visual documentation to learn everything you need to know
              about the platform and become an expert
            </p>
            <div className="position-relative w-100 mt-3">
              <button
                type="button"
                className="btn btn-light rounded-pill py-2 px-3 shadow-none  top-0 end-0 m-2"
              >
                Start reading
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <img className="img-fluid rounded animated zoomIn" src="src\assets\images\backtesting.png " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerbg;
