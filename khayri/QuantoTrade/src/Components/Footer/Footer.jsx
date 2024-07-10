
import './Footer.css';
const Footer = () => {
    return (
      <div className="container-fluid footer wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: 'black' }}>
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <h4 className="text-white mb-4" style={{ color: '#4ac4f3' }}>Address</h4>
              <p style={{ color: 'white' }}><i className="fa fa-map-marker-alt me-3" style={{ color: '#4ac4f3' }}></i>123 Street, New York, USA</p>
              <p style={{ color: 'white' }}><i className="fa fa-phone-alt me-3" style={{ color: '#4ac4f3' }}></i>+012 345 67890</p>
              <p style={{ color: 'white' }}><i className="fa fa-envelope me-3" style={{ color: '#4ac4f3' }}></i>info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4 className="text-white mb-4" style={{ color: '#4ac4f3' }}>Quick Link</h4>
              <a className="btn btn-link" href="#">About Us</a>
              <a className="btn btn-link" href="#">How to use</a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4 className="text-white mb-4" style={{ color: '#4ac4f3' }}>Popular Link</h4>
              <a className="btn btn-link" href="#">About Us</a>
              <a className="btn btn-link" href="#">How to use</a>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4 className="text-white mb-4" style={{ color: '#4ac4f3' }}>Newsletter</h4>
              <p style={{ color: '#4ac4f3' }}>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
              <div className="position-relative w-100 mt-3">
                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: '48px' }} />
                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary-gradient fs-4"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0"  style={{ color: '#7d97de' }}>
                &copy; <a className="border-bottom" href="#"  style={{ color: '#7d97de' }}>QuantoTrade </a> 
                  Designed By <a className="border-bottom" href="https://htmlcodex.com">    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  