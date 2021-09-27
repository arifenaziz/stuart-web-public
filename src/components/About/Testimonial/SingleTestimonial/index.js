const SingleTestimonial =({item})=> {
    return ( 
        <>
        <div className="col-md-12">
							<div className="testimonial-box">
								<img src={item.img} />
								<blockquote>
								{item.quote}
									<span className="fa fa-quote-right"></span>
								</blockquote>
								<div className="testimonial-content">
									<h6 className="testimonial-name">{item.person_name}</h6>
									<span className="testimonial-pos">{item.position}</span>
								</div>							
							</div>
		</div>
        </>
     );
}

export default SingleTestimonial;