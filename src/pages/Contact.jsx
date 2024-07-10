import { FormContact } from "../components/Form";

export const Contact = () => {
  return (
    <div className="container-xxl py-6" id="contact">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-3">Contact</h1>
            <p className="mb-4">
              If you have any questions or queries regarding our platform, reach
              out to us and we will respond as soon as possible.
            </p>
          </div>
          <div className="col-lg-6 ">
            <div className="modalForm">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
