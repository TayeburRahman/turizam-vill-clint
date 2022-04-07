import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="row banner pt-2 d-flex">
                <div className="col-md-6  col-sm-12">
                    <div className='backgroundText pb-5'>
                    <h1 className="pt-5 mt-5 pb-3 text-color-r">Discover an Immersive Camping Experience !!</h1>
                    <h4 className="text-prim ">Adventure Awaits </h4>
                    <p className="fw-bold pb-3" style={{color:"#504620e0"}}>No matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of.</p>
                    <Link  as={HashLink}
                    to="/campBlog"
                    className="pe-3 mb-5 ps-3 p-2"><button class="button-37" role="button">VISIT NOW</button> </Link>
                    </div>
                    
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;