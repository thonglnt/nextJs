const Footer = () => {
  return (
    <footer className="mt-5 me-1 ms-1 p-3">
      <div className="row pt-5">
        <div className="col-md-6">
          <h2>Subscribe to our newsletter</h2>
        </div>
        <div className="col-md-6 d-flex">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter your email..."
          />
          <span className="input-group-btn">
            <button className="btn btn-dark subscribe" type="button">
              subscribe
            </button>
          </span>
        </div>
      </div>
      <div className="row mt-5 ms-1 me-1">
        <hr />
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="col-md-2">
          <ul className="list-group list-group-flush list-menu">
            <li className="list-group-item">
              <a href="#">Shop All</a>
            </li>
            <li className="list-group-item">
              <a href="#">Makeup</a>
            </li>
            <li className="list-group-item">
              <a href="#">Skin Care</a>
            </li>
            <li className="list-group-item">
              <a href="#">Hair Care</a>
            </li>
            <li className="list-group-item">
              <a href="#">About</a>
            </li>
            <li className="list-group-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="list-group list-group-flush list-menu">
            <li className="list-group-item">
              <a href="#">Refund Policy</a>
            </li>
            <li className="list-group-item">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="list-group-item">
              <a href="#">FAQ</a>
            </li>
            <li className="list-group-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 social-icon">
          <i className="fa fa-facebook-official me-2" aria-hidden="true"></i>
          <i className="fa fa-twitter me-2" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
      <div className="row mt-5 ms-1 me-1">
        <hr />
      </div>
      <div className="row mt-2">
        <p>Copyright © 2023 Be Bold | Powered by Be Bold</p>
      </div>
    </footer>
  );
};

export default Footer;
