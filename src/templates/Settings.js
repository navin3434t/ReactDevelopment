import React from 'react'
import Header from '../headers/Header'
import Footer from '../templates/Footer'
import '../css/home.css'
const Settings=()=>(
	<div>
	<Header/>
	<div className="homeMiddleBody">

    <section id="seting-bg">
	<div className="container-fluid">
		<div className="row bg-set">
			<div className="col-12 col-sm-12 col-md-12 text-center">
				<h4 className="pad-10">Account</h4>
			</div>
		</div>
		<div className="row">
			<div className="setting-inner">
				<div className="col-12 col-sm-12 col-md-12">
					<p className="setting-p"><i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;Dheeraj Yadav</p>
				</div>
				<div className="col-12 col-sm-12 col-md-12">
					<p className="setting-p"><i className="fa fa-envelope"></i>&nbsp;&nbsp;dhrjyaduvanshi@gmail.com</p>
				</div>
				<div className="col-12 col-sm-12 col-md-12">
					<p className="setting-p"><i className="fa fa-mobile"></i>&nbsp;&nbsp;&nbsp;&nbsp;8920110630</p>
				</div>
				<div className="col-12 col-sm-12 col-md-12"> 
					<p className="setting-p"><i className="fa fa-sign-out"></i>&nbsp;&nbsp; Signout</p>
				</div>
			</div>
		</div>
	</div>
</section>

	</div>
	<Footer/>
	</div>
	)

export default  Settings