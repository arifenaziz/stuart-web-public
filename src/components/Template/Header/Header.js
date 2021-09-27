import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Link from 'next/link'

const Header =()=> {

	const [list,SetList]=useState([
        {
            "id":1,
            "title":"Home",
            "url":"/"
        },
        {
            "id":2,
            "title":"Services",
            "url":"/services"
        },
        {
            "id":2,
            "title":"About US",
            "url":"/about-us"
        },
        {
            "id":4,
            "title":"News/Blog",
            "url":"/news"
        },
        {
            "id":5,
            "title":"Career",
            "url":"/career"
        },
        {
            "id":6,
            "title":"Contact",
            "url":"/contact"
        },
                                                                        
    ]);


	const[sideMenuOpen,SetSideMenuOpen]=useState(false);

	const SideMenuHandle=()=>{
		SetSideMenuOpen(!sideMenuOpen);
	}
										


    return (
        <>
{/* header start */}
<header id="sticky-header" className="header-fixed header-transparent">
			<div className="header-area">
				<div className="container sm-100">
					<div className="row">
						<div className="col-lg-2 col-md-2 col-sm-2">
							<div className="logo text-upper">								
								<Link href="/"><a><img src="/assets/img/main_logo.png"/></a></Link>
							</div>
						</div>
						<div className="col-lg-6 col-md-9 col-sm-10">
							<div className="menu-area hidden-xs">
								<div>
									<ul className="basic-menu clearfix">
										<Navigation list={list}/>
									</ul>
								</div>

							</div>
							
							{/* <div className="basic-mobile-menu visible-xs visible-menu">
								<div id="mobile-nav">
									<ul class="hidden-xs">
									<Navigation list={list}/>											
									</ul>
								</div>
							</div> */}

			<div className="visible-xs visible-menu">

			<button type="button" className="hamburger is-closed" data-toggle="offcanvas" onClick={SideMenuHandle}>
                <span className="hamb-top"></span>
    			<span className="hamb-middle"></span>
				<span className="hamb-bottom"></span>
            </button>
			</div>


		
			<div id="wrapper" className={` ${sideMenuOpen ? 'toggled' : ''}`}>
        		<div className={`overlay ${sideMenuOpen ? 'show' : ''}`} ></div>
								

								<nav className="navbar" id="sidebar-wrapper" role="navigation">
								<ul className="nav sidebar-nav">
									{/* <li className="sidebar-brand">
										<a href="#">
										   Brand
										</a>
									</li> */}
									
									<Navigation list={list}/>

								</ul>
							</nav>
						
						
						
						</div>			



			

														
						</div>

						<div className="col-lg-4 col-md-1 col-sm-2">
							<div className="menu-area hidden-xs hidden-md custom-hidden">
								<nav>
									<ul className="right-menu clearfix">
										<li><a href="#" className="phone"><span className="ion-ios-telephone"></span>704-258-8281</a></li>
										<li className="estimate"><a href="#">Estimate Project</a></li>
									</ul>
								</nav>

							</div>
					
						</div>						



					</div>
				</div>
			</div>
		</header>
		
        {/* header end */}

        </>
    );
}

export default Header;