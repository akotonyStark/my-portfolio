import React from 'react'

function Resume() {
  return (
    <section className="site-section " id="section-resume">
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-5">
					<div className="section-heading text-center">
						<h2>My <strong>Resume</strong></h2>
					</div>
				</div>
				<div className="col-md-6">
					<h2 className="mb-5">Education</h2>
					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> Sept 2016 - June 2018</span>
						<h3>Masters in Systems and Software Engineering</h3>
						<p>"The purpose of Software Engineering is to control complexity, not create it."" - Pamela Zave</p>
						<span className="school">Higher School of Economics, National Research University</span>
					</div>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> Sept 2011 - June 2015.</span>
						<h3>BSc Computer Science</h3>
						<p>"Computer science is the operating system for all innovation."" - Steve Balmer</p>
						<span className="school">University of Ghana</span>
					</div>

			

				</div>
				<div className="col-md-6">


					<h2 className="mb-5">Experience</h2>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> March 2023 - Present</span>
						<h3>Lead Software Developer</h3>
						<p>Worked with a team of 5 developers to convert legacy JSF application into an SPA using VueJs and JAX-RS REST API services.</p>
						<span className="school">Accolm (Remote)</span>
					</div>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> Nov 2018 - Jan 2023</span>
						<h3>Software Developer</h3>
						<p>Spearheaded the development of an Invoicing App using React, requested by the Ghana Revenue Authority to be used by over 10 million Ghanaian business users to issue legal invoices to clients and generate revenue through taxes.</p>
						<span className="school">Persol Systems</span>
					</div>

					
				</div>
			</div>
		</div>
	</section>
  )
}

export default Resume