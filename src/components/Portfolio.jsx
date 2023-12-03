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
					<li data-filter=".packaging">Packaging</li>
					<li data-filter=".mockup">Mockup</li>
					<li data-filter=".typography">Typography</li>
					<li data-filter=".photography">Photography</li>
				</ul>
			</div>

			<div className="filters-content">
				<div className="row grid">
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p1.jpg" alt=""/>
							</div>
							<a href="images/p1.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                  
						</div>
						<div className="p-inner">
							<h4>Space Trips</h4>
							<div className="cat">Mapbox Application</div>
						</div>                                         
					</div>
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p2.jpg" alt=""/>
							</div>
							<a href="images/p2.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                  
						</div>
						<div className="p-inner">
							<h4>Todo App</h4>
							<div className="cat">Drag n Drop</div>
						</div>                                         
					</div>                            
					<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p3.jpg" alt=""/>
							</div>
							<a href="images/p3.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a> 

						</div>
						<div className="p-inner">
							<h4>Biz 360</h4>
							<div className="cat">ERP Application</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p4.jpg" alt=""/>
							</div>
							<a href="images/p4.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                
						</div> 
						<div className="p-inner">
							<h4>Tinatett</h4>
							<div className="cat">POS Application</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all typography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p5.jpg" alt=""/>
							</div>
							<a href="images/p5.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                
						</div>
						<div className="p-inner">
							<h4>Wedding Planner</h4>
							<div className="cat">Event Planning App</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all photography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p6.jpg" alt=""/>
							</div>
							<a href="images/p6.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                
						</div>
						<div className="p-inner">
							<h4>Rental App (React Native)</h4>
							<div className="cat">Mockup</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Portfolio