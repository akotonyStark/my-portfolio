import React from 'react'
import backgroundIng from '../assets/image_1.png'

function SiteHero() {
  return (
    <section className="site-hero" style={{backgroundImage: `url(${backgroundIng})`}} id="section-home" data-stellar-background-ratio="0.5">
		<div className="container">
			<div className="row intro-text align-items-center justify-content-center">
				<div className="col-md-10 text-center pt-5">

					<h1 className="site-heading site-animate">Hello, I'm <strong className="d-block">Augustine Akoto Ampofo </strong></h1>
					<strong className="d-block text-white text-uppercase letter-spacing">and I am a Full stack developer (Heavy on Frontend)</strong>

				</div>
			</div>
		</div>
	</section> 
  )
}

export default SiteHero