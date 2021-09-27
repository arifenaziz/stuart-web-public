const SingleFeature =({item})=> {
    return (
        <>

        <div className="col-md-4 col-sm-12 col-xs-12 crow">
				<div className="row">
					<div className=" col-md-12">
						<div className="mobile-placeholder">
						<a href="#">
							<div className={`img-place ${item.flag} process`}>
								<img src={item.img} className="img-3"/>
								<div className="fea-details">
									<h3>{item.title}</h3>
								</div>
							</div>

						</a>
						</div>
						<div className="feature-content">							
							<a href="#">
							<h3 className="feature-title">{item.title}</h3>
							</a>
							<p className="feature-description">The Stuart Corporation will advise you on how to navigate the startup landscape as you turn early business ideas into valued business solutions with the appropriate company structure and legitimizers to enable you business to take flight. </p>
							<a href="" className="feature-read-more"> <span>Learn More</span></a>
						</div>
					</div>
				</div>
			</div>	
			

        </>
    );
}

export default SingleFeature;