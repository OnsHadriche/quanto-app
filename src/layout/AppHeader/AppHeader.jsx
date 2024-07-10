
const AppHeader = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="m-0">QuantoTrade</h1>
          {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
        </a>
        <button
          className="navbar-toggler rounded-pill"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>

            <a href="#testimonial" className="nav-item nav-link">
              How to use
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a
            href=""
            className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
          >
            Launch app
          </a>
        </div>
      </nav>
  
  );
};
export default AppHeader;
