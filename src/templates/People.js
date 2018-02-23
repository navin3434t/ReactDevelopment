import React from 'react'
import HeaderPeopleListing from '../headers/HeaderPeopleListing'
import Footer from '../templates/Footer'
import '../css/bootstrap.min.css'
import '../css/home.css'
import dog5 from '../images/dog5.jpg'
import { connect } from 'react-redux'
import {getTrainerData} from '../actions/actions'
const People=({dispatch,state})=>{
   
   if(state.trainerData===undefined){
		dispatch(getTrainerData(state.user.id,state.user.webservice_token))
		return(
		<div></div>)
	}
	else{

	return(
	<div>
	<HeaderPeopleListing/>
	<div>

	
<section className="search-bar-main">
  <div className="container-fluid">
    <div className="row srch-main">
	  <div className="col-1 col-sm-1 col-md-1 text-center text-white">
		 <i className="fa fa-search srch-l-r" aria-hidden="true"></i>
	  </div>
	  <div className="col-9 col-sm-9 col-md-9">
		  <form className="form-group">
			 <input type="text" value=""  className="srchboxn form-control customIoHandle " />
		  </form>
	  </div>
	   <div className="col-1 col-sm-1 col-md-1 text-center text-white">
		 <i className="fa fa-microphone srch-l-r" aria-hidden="true"></i>
	  </div>
	 </div>
  </div>
</section>
<section id="dog-nd-cutomerlist" >
	<div className="container-fluid no-padding" id="pageone">
	{ state.trainerData.map(function(a){
			return(
	   <div className=" main-info" key={a.id}>
		<div className="row info-inner-personlist">
			 <div className="col-3 col-sm-3 col-md-3 no-padding text-center">
				  <img src={state.serverLink+a.image} alt="dog" className="img-responsive dogimg1"/>
			 </div>
			 <div className="col-9 col-sm-9 col-md-9 no-padding text-left">
				 <h4 className="text-red cutomer-name-pl">{a.firstName} {a.lastName}</h4>
				 <p className="text-black customer-info">{a.email}</p>
				 <p className="text-black customer-info">{a.mobile}</p>
				
			 </div>	
		 </div>
		{/*  <div className='blackOverLay' style="left:{{swipeLeft}}" ng-swipe-right=swipeFunRight(this)>
						<div className='percent_30 f_left' ng-click='redirectToTrainerBio($event,data.id)'>View</div>
						<div className='percent_30 f_right' ng-click='editTrainer(data.id)'>Edit</div>
					</div> */}
	   </div>
	   
	 )
	   })
	}   
	   
	   
	</div>
</section>

	</div>
	<Footer/>
	</div>
	)
}
}
function mapStateToProps(state){return {state:state}}
export default connect(mapStateToProps)(People)
