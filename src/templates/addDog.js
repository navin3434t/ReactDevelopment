import React from 'react'
import Header from '../headers/Header'
import Footer from '../templates/Footer'
import { connect } from 'react-redux'
import { BrowserRouter as Router,Link,withRouter} from "react-router-dom";
import '../css/home.css'


const addDog=({history})=>(
<div>
<Header/>
<section id="cutomer-address-main">
	<div className="container-fluid">
	   <div className="cutomer-address-inner">
	      <form className="address-bar" name="addDogForm">
		    <input type="text" placeholder="Dog Name" className="address-iput focusclor"/>
			<input type="text" name="new_file" value="" size="40" className="file_input_replacement focusclor" placeholder="Select File" />
		    <select className="cutomer-name-choose" >
		    
		    </select>
		    <div className="main-add-btn">
		      <input type="button" className="add-btn" value="Add" />
		    </div>
		   </form>
	   </div>
	</div>
</section>
<Footer/>
</div>
)
export default withRouter(connect()(addDog));

