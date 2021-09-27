import BlogControlSingle from "./BlogControlSingle/BlogControlSingle";

const BlogControl =()=> {
    return ( 
        <>
        

        {/* blog-area */}
		<div className="basic-blog-area ptb-90">
			<div className="container">
				<div className="area-title text-center">
					<h2>Our News</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
				</div>
				<div className="row blog-masonry">
					{
                        [1,2,3,4,5,6].map((item,index)=>(
                            <BlogControlSingle key={index}/>
                        ))
                    }
				</div>

				<nav>
					<ul className="pagination">
						<li><a href="#" aria-label="Previous"><i className="ion-ios-arrow-back"></i></a></li>
						<li className="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li><a href="#" aria-label="Next"><i className="ion-ios-arrow-forward"></i></a></li>
					</ul>
				</nav>

			</div>
		</div>
		{/* blog-area end */}


        </>
     );
}

export default BlogControl;