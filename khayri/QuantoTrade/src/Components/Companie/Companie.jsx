// Companie.js
import companies1 from '../../assets/companies1.png';
import companies2 from '../../assets/companies2.png';
import companies3 from '../../assets/companies3.png';
import './Companie.css';

const Companie = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: 'black' }} id="review">
      <div className="container py-5 px-lg-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-5" style={{ color: 'white' }}>Built and Powered by Trusted Companies</h1>
        </div>
        <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          <div className="testimonial-item rounded p-4">
            <div className="d-flex flex-column align-items-center mb-4">
              <img className="img-fluid bg-white rounded flex-shrink-0 p-0" src={companies1} alt="Client" />
            </div>
          </div>
          <div className="testimonial-item rounded p-4">
            <div className="d-flex flex-column align-items-center mb-4">
              <img className="img-fluid bg-white rounded flex-shrink-0 p-5" src={companies2} alt="Client" />

            </div>
          </div>
          <div className="testimonial-item rounded p-4">
            <div className="d-flex flex-column align-items-center mb-4">
              <img className="img-fluid bg-white rounded flex-shrink-0 p-1" src={companies3} alt="Client" />
            </div>
          </div>
          <div className="testimonial-item rounded p-4">
            <div className="d-flex flex-column align-items-center mb-4">
              <img className="img-fluid bg-white rounded flex-shrink-0 p-1" src={companies3} alt="Client" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Companie;
