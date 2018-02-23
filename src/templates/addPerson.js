import React from 'react'
import Header from '../headers/Header'
import Footer from '../templates/Footer'
import { connect } from 'react-redux'
import { BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import '../css/home.css'


const addPerson=({history})=>(
<div>
<Header/>
<div>
<section id="cutomer-address-main">
	<div className="container-fluid">
	   <div className="cutomer-address-inner">
	      <form className="address-bar">
		    <input type="text" placeholder="First Name" className=" address-iput focusclor"/>
		    <input type="text" placeholder="Last Name" className=" address-iput focusclor" />
			<input type="text" name="new_file" value="" size="40" className="file_input_replacement focusclor" placeholder="Person Image"/>
			<input type="text" placeholder="Mobile No." className=" address-iput focusclor"/>
			<input type="email" placeholder="Email" className=" address-iput focusclor" />
			<input type="text" placeholder="User Name" className=" address-iput focusclor" />
			<input type="text" placeholder="Default Password" className=" address-iput focusclor" />
			<input type="text" placeholder="Address 1" className="address-iput focusclor" />
			<input type="text" placeholder="Address 2" className=" address-iput focusclor" />
			<select className="cutomer-name-choose" >
		    </select>
			<input type="text" placeholder="Zip" className=" address-iput focusclor" />
			<select className="cutomer-name-choose rolefield" >
				<option value=''>Select A role</option>
				<option value='1'>Admin</option>
				<option value='0'>User</option>
		    </select>
		  <div className="main-add-btn">
		      <input type="button" className="add-btn" value="Add"  />
		  </div>
		  </form>
	   </div>
	</div>
</section>
</div>
<Footer/>
</div>
)
export default withRouter(connect()(addPerson));