import React from 'react'
import ArrowDonw from '../images/icon-arrow-down.svg'

const Banner = () => {
  return (
    <div id="home" className="banner container-fluid text-center pt-5 mt-5">
      {/* <h1 className="text-uppercase fs-1 mb-3 typing">we are creatives</h1> */}
      <div class="wrapper">
        <div class="typing-demo text-uppercase">we are creatives</div>
      </div>
      <img src={ArrowDonw} alt="" className="mt-5 mb-3" />
    </div>
  );
}

export default Banner
