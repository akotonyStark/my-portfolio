import React from 'react'
import space from '../assets/p1.jpg'
import todo from '../assets/p2.png'
import erp from '../assets/post_2.jpg'
import pos from '../assets/pos.jpeg'
import figma from '../assets/fig.jpg'
import seating from '../assets/p7.png'
import wp from '../assets/wp.png'
import gavel from '../assets/gavel.jpg'

function Portfolio() {
	return (
		<section className="site-section" id="section-portfolio">
			<div className="container">
				<div className="row">
					<div className="section-heading text-center col-md-12">
						<h2>Featured <strong>Portfolio</strong></h2>
						<marquee><h5>Hover on Thumbnail for a few seconds to get login details</h5></marquee>
					</div>
				</div>
				<div className="filters">
					{/* <ul>
						<li className="active" data-filter="*">All</li>
						<li data-filter=".packaging">Client Projects</li>
						<li data-filter=".mockup">Personal Projects </li>
						<li data-filter=".typography">Mockups</li>
					</ul> */}
				</div>

				<div className="filters-content">
					<div className="row grid">

						{/* Wedding Planner	 */}
						<div className="single-portfolio col-sm-4 all mockup">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://react-wedding-planner.netlify.app/" target='_blank'>
										<img className="image img-fluid" src={wp} alt="" />
									</a>

								</div>
								<a href="https://react-wedding-planner.netlify.app/"  target='_blank' className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={wp} alt="Rocket" /></div>
									</div>
								</a>
							</div>
							<a href="https://react-wedding-planner.netlify.app/"><div className="p-inner">
								<h4>Wedding Planner</h4>
								<div className="cat">Wedding Planner</div>
							</div></a>
						</div>


						{/* BIZ-360 */}
						<div className="single-portfolio col-sm-4 all packaging">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://spes.pscgh.com:442/bizApp/" target="_blank" className="img-pop-up">
										<img className="image img-fluid" src={erp} alt="" />
									</a>
								</div>
								
								<a href='https://spes.pscgh.com:442/bizApp/' target='_blank' className="img-pop-up">
								<div className="middle">
										<div className="text align-self-center d-flex"><img src={erp} alt="ERP" /></div>
									</div>
								</a>
		
							</div>
							<a href="https://spes.pscgh.com:442/bizApp/" target="_blank">
								<div className="p-inner">
									<h4>Biz360</h4>
									<div className="cat">ERP</div>
								</div>
							</a>

						</div>

						{/* LAW-FIRM */}
						<div className="single-portfolio col-sm-4 all packaging">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://opokuamponsahandco.com/" target="_blank" className="img-pop-up">
										<img className="image img-fluid" src={gavel} alt="" />
									</a>
								</div>
								
								<a href='https://opokuamponsahandco.com/' target='_blank' className="img-pop-up">
								<div className="middle">
										<div className="text align-self-center d-flex"><img src={gavel} alt="LAW FIRM" /></div>
									</div>
								</a>
		
							</div>
							<a href="https://opokuamponsahandco.com/" target="_blank">
								<div className="p-inner">
									<h4>Amponsah & Co</h4>
									<div className="cat">Law Firm</div>
								</div>
							</a>

						</div>

						{/* Tinatett */}
						<div className="single-portfolio col-sm-4 all packaging" title='(username: admin, password: Pass@123)'>
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href='https://tinatett.netlify.app/' target='_blank'>
										<img className="image img-fluid" src={pos} alt="" />
									</a>

								</div>
								<a href='https://tinatett.netlify.app/' target='_blank' className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={pos} alt="POS" /></div>
									</div>
								</a>
							</div>
							<a href="images/tinatett.png">
								<div className="p-inner">
									<h4>Tinatett</h4>
									<div className="cat">POS </div>
								</div>
							</a>

						</div>


						{/* West African Tours */}
						{/* <div className="single-portfolio col-sm-4 all packaging" title='(username: admin, password: Pass@123)'>
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href='https://www.westafricantoursinfo.com/' target='_blank'>
										<img className="image img-fluid" src={pos} alt="" />
									</a>

								</div>
								<a href='https://www.westafricantoursinfo.com/' target='_blank' className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={pos} alt="POS" /></div>
									</div>
								</a>
							</div>
							<a href="images/tinatett.png">
								<div className="p-inner">
									<h4>Tourism</h4>
									<div className="cat">Travel </div>
								</div>
							</a>

						</div> */}



						


						{/* Space Trips	 */}
						<div className="single-portfolio col-sm-4 all mockup">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://space-trips.netlify.app/" target='_blank'>
										<img className="image img-fluid" src={space} alt="" />
									</a>

								</div>
								<a href="https://space-trips.netlify.app/"  target='_blank' className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={space} alt="Rocket" /></div>
									</div>
								</a>
							</div>
							<a href="https://space-trips.netlify.app/"><div className="p-inner">
								<h4>Space Trips</h4>
								<div className="cat">Mapbox Application</div>
							</div></a>
						</div>

						

						{/* Guest Seating */}
						<div className="single-portfolio col-sm-4 all packaging">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<img className="image img-fluid" src={seating} alt="" />
								</div>
								<a href="https://guest-seating.netlify.app/" target='_blank' className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={seating} alt="Guest Book" /></div>
									</div>
								</a>
							</div>

							<a href="https://guest-seating.netlify.app/" target='_blank'>
								<div className="p-inner">
									<h4>Guests Seating</h4>
									<div className="cat">Drag n Drop App</div>
								</div>
							</a>

						</div>

						{/* Todo-App */}
						<div className="single-portfolio col-sm-4 all mockup">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href='https://todo-app-webfx.netlify.app/' target='_blank'>
										<img className="image img-fluid" src={todo} alt="" />
									</a>

								</div>
								<a href='https://todo-app-webfx.netlify.app/' target='_blank' className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={todo} alt="Todo List" /></div>
									</div>
								</a>
							</div>
							<a href='https://todo-app-webfx.netlify.app/' target='_blank'>
								<div className="p-inner">
									<h4>Todo App</h4>
									<div className="cat">Drag n Drop</div>
								</div>
							</a>
						</div>


						

						{/* UI-UX */}
						<div className="single-portfolio col-sm-4 all typography">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://www.figma.com/file/57YzqUDPNcWJQcDhGwk8yd/ProjectX?type=design&node-id=0%3A1&mode=design&t=X7EfGNT0wlRLOKV7-1">
										<img className="image img-fluid" src={figma} alt="" />
									</a>
								</div>
								<a href="https://www.figma.com/file/57YzqUDPNcWJQcDhGwk8yd/ProjectX?type=design&node-id=0%3A1&mode=design&t=X7EfGNT0wlRLOKV7-1" className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src={figma} alt="Figma" /></div>
									</div>
								</a>
							</div>

							<a href="https://www.figma.com/file/57YzqUDPNcWJQcDhGwk8yd/ProjectX?type=design&node-id=0%3A1&mode=design&t=X7EfGNT0wlRLOKV7-1">
								<div className="p-inner">
									<h4>Rental App (Figma Design)</h4>
									<div className="cat">Mockup </div>
								</div>
							</a>

						</div>


					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio