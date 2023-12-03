import React from 'react'

function Services() {
  return (
    
	<section className="site-section pb-0"  id="section-services">
    <div className="container">

        <div className="row mb-4">
            <div className="col-md-12">
                <div className="section-heading text-center">
                    <h2>My <strong>Services</strong></h2>
                </div>
            </div>
        </div>
        <div className="row">

            <div className="col-md-6 col-lg-4 text-center mb-5">
                <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                        <span className="icon-browser2"></span>
                    </span>
                    <h3 className="mb-4">Web Design</h3>
                    <p>Developing responsive, sturdy, robust UI with great User Experience.</p>
                    <p><a href="http://www.akwaabaevolution.com" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center mb-5">
                <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                        <span className="icon-presentation"></span>
                    </span>
                    <h3 className="mb-4">UI/UX Design</h3>
                    <p>Design pixel perfect mockups for your web and mobile apps.</p>
                    <p><a href="http://www.akwaabaevolution.com" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center mb-5">
                <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                        <span className="icon-mobile"></span>
                    </span>
                    <h3 className="mb-4">Mobile Apps</h3>
                    <p>Develop mobile apps with intuitive UI using React Native.</p>
                    <p><a href="http://www.akwaabaevolution.com" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
                </div>
            </div>

            

        </div>
    </div>
</section>
  )
}

export default Services