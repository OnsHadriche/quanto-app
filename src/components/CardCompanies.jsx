import PropTypes from 'prop-types';

const CardCompanies = ({ imageComp, titleComp }) => {
  return (
    <div className="col wow fadeInUp" data-wow-delay="0.1s">
      <div className="feature-item d-flex flex-column justify-content-end rounded text-center p-4">
        <img
          src={imageComp}
          className="img-fluid "
          alt={titleComp}
        />
        <h6 className="mb-3">{titleComp}</h6>
      </div>
    </div>
  );
}

CardCompanies.propTypes = {
  imageComp: PropTypes.string.isRequired,
  titleComp: PropTypes.string.isRequired,
};

export default CardCompanies;
