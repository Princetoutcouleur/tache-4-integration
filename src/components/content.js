import React from 'react'
import Egg from "../images/desktop/image-transform.jpg"
import Coupe from "../images/desktop/image-stand-out.jpg"

const Content = () => {
  return (
    <div className="conatiner-fluid">
      <div className="row g-0">
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
          <div className="p-5">
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compeling visuals
              that do most of the marketing for you.
            </p>
            <a
              className="text-decoration-none fw-bold text-dark  border-bottom border-warning border-5"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={Egg} alt="" className="img-fluid inner-img" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={Coupe} alt="" className="img-fluid inner-img" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
          <div className="p-5">
            <h1>Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers and copywritters, we'll build and
              extend your brand in digital places.
            </p>
            <a
              className="text-decoration-none fw-bold text-dark  border-bottom border-danger border-5"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 design text-center">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 photography text-center">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, hight-quality photos that improve your business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content
