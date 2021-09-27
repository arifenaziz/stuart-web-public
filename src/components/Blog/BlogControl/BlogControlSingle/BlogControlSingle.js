import Link from "next/link";

const BlogControlSingle =()=> {
    return ( 
        <>
        
        <div className="col-sm-6 col-md-4 blog-item">
					
						<article className="post">
							<div className="post-thumbnail">
								<img src="/assets/img/blog/1.jpg" alt=""/>
							</div>
							<div className="post-header">
								<div className="post-meta">
									By Steve white, 23 November, 2021
								</div>
								<h2 className="post-title"><Link href="news/intor-news" ><a>The Ultimate Success Guide</a></Link></h2>
							</div>
							<div className="post-content">
								<p>Grass there without lights be years male have and grass firmament kind bring, is thing does not herb.</p>								
								<Link href="news/intor-news" ><a className="feature-read-more"><span>Read More</span></a></Link>  
								
							</div>
						</article>
						
		</div>
        
        
        </>
     );
}

export default BlogControlSingle;