import React from 'react'
import ArrowDonw from '../images/icon-arrow-down.svg'

const Banner = () => {
  return (
    <div className="banner container-fluid text-center pt-5">
      <h1 className="text-uppercase fs-1 mb-3">we are creatives</h1>
      <img src={ArrowDonw} alt="" className='mt-5 mb-3'/>
    </div>
  );
}

export default Banner
