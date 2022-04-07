import React from "react";
import useService from "../Hooks/useService";
import './Service.css';

const Service = () => {
  const { service } = useService([]);
  return (
    <div className="text-left mt-5 pb-5 service" id="service">
    <div className="container">
    <h1 className="pb-3 pt-3">Camping Ground</h1>
      <div className="text-left">
        <div className="row gap-3 service-row d-flex">
          {service.map((pd, index) => (
            <div className="card col-md-4 col-sm-12 p-2" style={{ width: "23rem" }}>
              <img className="" src={pd.img}className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{pd.name}<span className="cart-span-text">{pd.members} || {pd.day}</span>
                </h5>
                <p className="card-text">{pd.description}</p>
                {/* <Link to={`/service/${pd._id}`}> */}
                <a href="" className="btn btn-primary">
                VIEW MORE
                </a>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Service;
