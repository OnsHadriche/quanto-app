function AboutSetps() {
  return (
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div className="row g-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-4">Build quickly.</h1>
            <p className="mb-4">
              Using QuantoTrade, you can build your desired trading strategies
              from scratch within a few minutes just like that without spending
              hours and hours coding the strategy
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded wow zoomIn"
              data-wow-delay="0.5s"
              src="img/about.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSetps;
