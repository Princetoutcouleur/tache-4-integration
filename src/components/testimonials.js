import React from 'react'
import Emily from "../images/image-emily.jpg"
import Thomas from "../images/image-thomas.jpg"
import Jennie from "../images/image-jennie.jpg"

const Testimonials = () => {
  return (
    <div className='container my-5'>
        <h3 className='text-uppercase text-center text-secondary pb-5'>client testimonials</h3>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <div class="big-brother">
                <div class="main-container">
                    <div class="card-container">
                        <div class="test-container">
                            <p>We put our trust in Sunnysude and they delivered, making sureour needs were met and deadlines were always hit.</p>
                        </div>
                        <div class="card-bg">
                            <div class="img-container">
                                <img src={Emily} />
                            </div>
                            <div class="meta-container">
                                <h3>Emily R.</h3>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <div class="big-brother">
                <div class="main-container">
                    <div class="card-container">
                        <div class="test-container">
                            <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's succes made it a satisfying and enjoyable experience.</p>
                        </div>
                        <div class="card-bg">
                            <div class="img-container">
                                <img src={Thomas} />
                            </div>
                            <div class="meta-container">
                                <h3>Thomas S.</h3>
                                <p>Chief Operating Officier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <div class="big-brother">
                <div class="main-container">
                    <div class="card-container">
                        <div class="test-container">
                            <p>Incredible and result! Our sales increased over 400% when we woerked with Sunnyside. Highly recommended !</p>
                        </div>
                        <div class="card-bg">
                            <div class="img-container">
                                <img src={Jennie} />
                            </div>
                            <div class="meta-container">
                                <h3>Jennie F.</h3>
                                <p>Business Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials
