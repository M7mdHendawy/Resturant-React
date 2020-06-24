import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <h4>Who We Are</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                repudiandae. Reprehenderit similique iste laboriosam ratione!
                Rerum nulla accusamus voluptatibus. Ipsam rem facilis labore
                temporibus, perferendis debitis dolores ut odit nesciunt?40
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Our Contacts</h4>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="#">Services</a>
                </li>
                <li>
                  <a className="footer-link" href="#">About Us</a>
                </li>
                <li>
                  <a className="footer-link" href="#">Events</a>
                </li>
                <li>
                  <a className="footer-link" href="#">Society</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Our Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="#">Banks</a>
                </li>
                <li>
                  <a className="footer-link" href="#">About Us</a>
                </li>
                <li>
                  <a className="footer-link" href="#">Notes</a>
                </li>
                <li>
                  <a className="footer-link" href="#">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        <div className="footer-botoom">
            <p className="text-center mt-4">
                &copy;{new Date().getFullYear()} All rights Reserved to <a href="https://www.facebook.com/Moha.Hendawy">Hendawy</a>
            </p>
        </div>
        </div>

      </footer>
 
  );
}

export default Footer;
