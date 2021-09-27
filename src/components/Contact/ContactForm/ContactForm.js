const ContactForm =()=> {
    return ( 
        <>


<div className="basic-contact-form bg-contact ptb-90">
			<div className="container">
		
				<div className="row">

					<div className="col-md-6">

					<div className="get-in-touch">
						<h5><span>Get in Touch</span></h5>

						<h5>
						Prism truffaut neutra blue bottle letterpress plaid church-key.
						<span>hello@thestuartcorporation</span>
						</h5>
						
					</div>

					</div>


					<div className="col-sm-6 custom-col">
						<form id="contact-form" action="mail.php" method="post">
							<div className="row">
								<div className="col-md-6 form-group">
									<label className="sr-only">Name</label>
									<input type="text" className="form-control input-lg" name="name" placeholder="First Name" />
									<p className="help-block text-danger"></p>
								</div>
								<div className="col-md-6 form-group">
									<label className="sr-only">Email</label>
									<input type="email" className="form-control input-lg" name="email" placeholder="Email" />
									<p className="help-block text-danger"></p>
								</div>
								<div className="col-md-6 form-group">
									<label className="sr-only">Phone</label>
									<input type="email" className="form-control input-lg" name="phone" placeholder="Email" />
									<p className="help-block text-danger"></p>
								</div>								
								<div className="col-md-6 form-group">
									<label className="sr-only">Subject</label>
									<input type="text" className="form-control input-lg" name="subject" placeholder="Subject" />
									<p className="help-block text-danger"></p>
								</div>
								<div className="col-md-12 form-group">
									<textarea className="form-control input-lg" rows="7" name="message" placeholder="Message*"></textarea>
									<p className="help-block text-danger"></p>
								</div>
								<div className="col-md-12 text-center">
									<button type="submit" className="btn btn-lg btn-round btn-dark">Send Message</button>
								</div>

							</div>
						</form>
						
						
					</div>
				</div>			
			</div>
		</div>


        </>
     );
}

export default ContactForm;