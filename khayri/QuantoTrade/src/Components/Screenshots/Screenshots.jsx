import step2 from '../../assets/step2.png';
import './Screenshots.css';
const Screenshots = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <img className="img-fluid fadeInUp" style={{ animationDelay: '0.1s' }} src={step2} alt="About Image" />
          </div>
          <div className="col-lg-6 fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h1 className="mb-4 text-primary-gradient">Build your ideal trading strategies swiftly</h1>
            <h3 className="mb-4">With <strong className="text-primary-gradient">QuantoTrade</strong>, create from scratch in minutes, no need for extensive coding hours.</h3>
            <div className="row g-4">
              <div className="col-sm-6 fadeIn" style={{ animationDelay: '0.5s' }}>
                <a href="#" className="d-flex bg-primary-gradient rounded py-3 px-4">
                  <div className="ms-3">
                    <h5 className="text-white mb-0">Learn To Use</h5>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 fadeIn" style={{ animationDelay: '0.7s' }}>
                <a href="#" className="d-flex bg-secondary-gradient rounded py-3 px-4">
                  <div className="ms-3">
                    <h5 className="text-white mb-0">Launch App</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screenshots;