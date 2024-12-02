import React from 'react';
// import './assets/css/style.css';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className="bgc-primary">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3">
              <div className="h5 fw-medium text-decoration-underline text-white mb-3">DISCLAIMER</div>
              <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="row gy-4">
                <div className="col-md-4 col-6">
                  <div className="h5 fw-medium text-decoration-underline text-white mb-3">QUICK LINKS</div>
                  <ul className="list-unstyled">
                  <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-6">
                  <div className="h5 fw-medium text-decoration-underline text-white mb-3">TOP CITIES</div>
                  <ul className="list-unstyled">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 1</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="h5 fw-medium text-decoration-underline text-white mb-3">CONTACT</div>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" height="1em">
                          <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                        </svg>
                        <span>+91 000 000 0000</span>
                      </a>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" height="1em">
                        <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z"></path>
                      </svg>
                      <span>India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row gy-3 align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-2 gap-lg-3 flex-wrap justify-content-center justify-content-md-start">
                <div className="h5 fw-medium mb-0">Follow us:</div>
                <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Copyright &copy; 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Sticky Call and WhatsApp Buttons */}
      <div className="nowcalling">
        <div className="lcol">
          <a href="tel:+910000000000">Call Now</a>
        </div>
        <div className="rcol">
          <a href="#" target="_blank">WhatsApp</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
