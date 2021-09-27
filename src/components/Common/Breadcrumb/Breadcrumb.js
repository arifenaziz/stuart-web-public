const Breadcrumb =({bg,heading,intro})=> {
    return ( 
        <>

{/* basic-breadcrumb start */}
		<div className={`breadcrumb-2-area pos-relative ${bg} bg-black-alfa-10`}>
			<div className="hero-caption">
				<div className="hero-text">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 text-center breadcrumb-top">
								<h1 className="text-uppercase color-white breadcrumb-2">{heading}</h1>
								<p className="lead color-white ">{intro}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
		
        {/* basic-breadcrumb end	 */}


        </>
     );
}

export default Breadcrumb;