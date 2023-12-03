import React from 'react'

function AboutMe() {
  return (
    <section className="site-section" id="section-about">
		<div className="container">
			<div className="row mb-5 align-items-center">
				<div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					<img src="images/image_1.png" alt="Image placeholder" className="img-fluid" />
				</div>
				<div className="col-lg-5 pl-lg-5">
					<div className="section-heading">
						<h2>About <strong>Me</strong></h2>
					</div>
					<p className="lead">Software Engineer with over 5 years of experience working with a development team and primarily building and maintaining web apps that serve over a million users, businesses, and government organizations.</p>
					<p className="mb-5  ">Keen problem-solver with proven track record of proficiency in modern web technologies, UI/UX development, team management, and agile methodologies.</p>

					<p>
						<a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll" style={{marginRight:10}}>Hire Me</a>
						<a href="cv.pdf" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
					</p>
				</div>
			</div>


		</div>
	</section>
  )
}

export default AboutMe