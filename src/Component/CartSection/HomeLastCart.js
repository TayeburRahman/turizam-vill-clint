import React from "react";
import { AiFillCustomerService, AiOutlineCarryOut, AiOutlineUsergroupAdd } from "react-icons/ai";
import img1 from "../../image/nJF6H2.jpg";
import img2 from "../../image/wWLWah.jpg";
import "./HomeLastCart.css";


const HomeLastCart = () => {
  return (
    <div className="container">
      <div className="row pt-5">
          <div className="text-left pb-3">
          <h1>TourRadar Spotlight</h1>
          <p>Find out what’s happening at TourRadar - from the latest travel news to our special offers.</p>
          </div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="card">
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body text-left">
                  <h5>Deals of The Week</h5>
                  <p className="card-text">
                    Trick or treat; these deals are hard to beat! Save up to 50%
                    and book with confidence with our Peace of Mind program.
                  </p>
                  <h6>
                    <a href=""> Register Now</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="card">
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body text-left">
                  <h5>Adventure Together</h5>
                  <p className="card-text">
                    Adventure Together is the travel event of the year. Make
                    sure you sign-up for free, today!
                  </p>
                  <h6 className="text-bottom">
                    <a href=""> Register Now</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="rounded">
            <div className="card mb-3 rounded-start">
              <div className="row g-0">
                <div className="col-md-4 bg-custom rounded-start">
                  <AiOutlineUsergroupAdd   className="icon-size"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Travel Insurance</h5>
                    <p className="card-text">
                      <small className="text-muted">Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded">
            <div className="card mb-3 rounded-start">
              <div className="row g-0">
                <div className="col-md-4 bg-custom rounded-start ">
                   <AiFillCustomerService className="icon-size" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">24/7 Customer Support</h5>
                    <p className="card-text">
                      <small className="text-muted"> Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded  ">
            <div className="card mb-3 ">
              <div className="row g-0">
                <div className="col-md-4 bg-custom rounded-start">
                <AiOutlineCarryOut className="icon-size"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Travel & Earn</h5>
                    <p className="card-text">
                      <small className="text-muted"> Learn More</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLastCart;
