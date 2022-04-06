import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
       <div className="row p-5 mt-5">
       <div className="col-md-4 col-sm-12">
        <div className="row d-flex">
          <h5>
            About TourRadar
            <br />
            <br />
          </h5>
          <div className="col-md-6 col-sm-12">
            <a href="">Who We Are</a>
            <br />
            <a href="">Sustainable Travel</a>
            <br />
            <a href="">Adventure Together - Online Event</a> <br />
            <a href="">Careers</a> <br />
            <a href=""> Press</a> <br />
            <a href=""> Terms & Conditions</a> <br />
          </div>
          <div className="col-md-6 col-sm-12">
            <a href=""> Cookies</a> <br />
            <a href="">Contact Us</a>
            <br />
            <a href=""> Help Centre</a> <br />
            <a href="">About Us</a> <br />
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="row d-flex">
          <h5>
            Travellers
            <br />
            <br />
          </h5>
          <div className="col-md-6 col-sm-12">
            <a href="">Travel Insurance</a>
            <br />
            <a href=""> Flights</a>
            <br />
            <a href="">Travel & Earn</a> <br />
            <a href="">Write a Review </a> <br />
            <a href="">Days to Come Magazine </a> <br />
          </div>
          <div className="col-md-6 col-sm-12">
            <a href=""> App</a> <br />
            <a href=""> List Your Adventures</a>
            <br />
            <a href=""> Guide Community</a> <br />
            <a href=""> Promote Your Tours</a> <br />
          </div>
        </div>
      </div>
      <div className="col-md-4 fw-bolder text-email col-sm-12">
        <h5 className="footer">Phone :</h5>
        <p className="text-email">United States & Canada +1 833 895 6770</p>
        <p className="text-email">Australia +61 7 3106 8663 </p>
        <p className="text-email">United States & Canada +1 833 895 6770</p>
        <p className="text-email">Great Britain +44 800 802 1046</p>
        <p className="text-email">New Zealand +64 4888 0182 </p>
        <p> </p>
        <br />
      </div>
       </div>
       <hr></hr>
       <div className="d-flex"> 
          <p>3009//tayebrayhan101@gmail.com</p> 
       </div>
    </div>
  );
};

export default Footer;
