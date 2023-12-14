import React from 'react'

function Portfolio() {
	return (
		<section className="site-section" id="section-portfolio">
			<div className="container">
				<div className="row">
					<div className="section-heading text-center col-md-12">
						<h2>Featured <strong>Portfolio</strong></h2>
					</div>
				</div>
				<div className="filters">
					<ul>
						<li className="active" data-filter="*">All</li>
						<li data-filter=".packaging">Client Projects</li>
						<li data-filter=".mockup">Personal Projects </li>
						<li data-filter=".typography">Mockups</li>
						{/* <li data-filter=".photography">Photography</li> */}
					</ul>
				</div>

				<div className="filters-content">
					<div className="row grid">

						<div className="single-portfolio col-sm-4 all mockup">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://space-trips.netlify.app/">
										<img className="image img-fluid" src="images/p1.jpg" alt="" />
									</a>

								</div>
								<a href="https://space-trips.netlify.app/" className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
									</div>
								</a>
							</div>
							<a href="https://space-trips.netlify.app/"><div className="p-inner">
								<h4>Space Trips</h4>
								<div className="cat">Mapbox Application</div>
							</div></a>
						</div>



						<div className="single-portfolio col-sm-4 all mockup">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href='https://todo-app-webfx.netlify.app/'>
										<img className="image img-fluid" src="images/p2.png" alt="" />
									</a>

								</div>
								<a href="images/p2.png" className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
									</div>
								</a>
							</div>
							<a href='https://todo-app-webfx.netlify.app/'>
								<div className="p-inner">
									<h4>Todo App</h4>
									<div className="cat">Drag n Drop</div>
								</div>
							</a>
						</div>


						<div className="single-portfolio col-sm-4 all packaging" title="{username: tonyStark, password: Welcome@2023}">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://spes.pscgh.com:442/bizApp/" target="_blank" className="img-pop-up">
										<img className="image img-fluid" src="images/post_2.jpg" alt="" />
									</a>
								</div>
								
									<div className="middle">
										<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
									</div>
								

							</div>
							<a href="https://spes.pscgh.com:442/bizApp/" target="_blank">
								<div className="p-inner">
									<h4>Biz 360</h4>
									<div className="cat">ERP Application</div>
								</div>
							</a>

						</div>

						{/* Tinatett */}
						<div className="single-portfolio col-sm-4 all packaging" title='(username: admin, password: Pass@123)'>
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href='https://tinatett.netlify.app/'>
										<img className="image img-fluid" src="images/pos.jpeg" alt="" />
									</a>

								</div>
								<a href="images/tinatett.png" className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
									</div>
								</a>
							</div>
							<a href="images/tinatett.png">
								<div className="p-inner">
									<h4>Tinatett</h4>
									{/* <h6>Username: admin</h6>
								<h6>Password: Pass@123</h6> */}
									<div className="cat">POS </div>
								</div>
							</a>

						</div>



						<div className="single-portfolio col-sm-4 all packaging">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<img className="image img-fluid" src="images/p5.jpg" alt="" />
								</div>
								<a href="images/wp.png" className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
									</div>
								</a>
							</div>

							<a href="images/wp.png">
								<div className="p-inner">
									<h4>Wedding Planner</h4>
									<div className="cat">Event Planning App</div>
								</div>
							</a>

						</div>

						{/* UI-UX */}
						<div className="single-portfolio col-sm-4 all typography">
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									<a href="https://www.figma.com/file/57YzqUDPNcWJQcDhGwk8yd/ProjectX?type=design&node-id=0%3A1&mode=design&t=X7EfGNT0wlRLOKV7-1">
										<img className="image img-fluid" src="images/fig.jpg" alt="" />
									</a>
								</div>
								<a href="https://www.figma.com/file/57YzqUDPNcWJQcDhGwk8yd/ProjectX?type=design&node-id=0%3A1&mode=design&t=X7EfGNT0wlRLOKV7-1" className="img-pop-up">
									<div className="middle">
										<div className="text align-self-center d-flex"><img src="images/preview.png" alt="" /></div>
									</div>
								</a>
							</div>

							<a href="https://www.figma.com/file/57YzqUDPNcWJQcDhGwk8yd/ProjectX?type=design&node-id=0%3A1&mode=design&t=X7EfGNT0wlRLOKV7-1">
								<div className="p-inner">
									<h4>Rental App (React Native)</h4>
									<div className="cat">Mockup</div>
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