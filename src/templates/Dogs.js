import React from 'react'
import HeaderListing from '../headers/HeaderListing'
import Footer from '../templates/Footer'
import { connect } from 'react-redux'
import dog5 from '../images/dog5.jpg'
import customer from '../images/customer.jpg'
const Dogs=({dispatch,state})=>{

	if(state.dogData===undefined){
		dispatch(getDogData(state.user.id,state.user.webservice_token))
		return(
		<div></div>)
	}
	else{

	return(
	<div>
	<HeaderListing/>
	<div>
		
<section className="search-bar-main">
  <div className="container-fluid">
    <div className="row srch-main">
	  <div className="col-1 col-sm-1 col-md-1 text-center text-white">
		 <i className="fa fa-search srch-l-r" aria-hidden="true"></i>
	  </div>
	  <div className="col-9 col-sm-9 col-md-9">
		  <form className="form-group">
			 <input type="text" value=""  className="srchboxn form-control "/>
		  </form>
	  </div>
	   <div className="col-1 col-sm-1 col-md-1 text-center text-white">
		 <i className="fa fa-microphone srch-l-r" aria-hidden="true"></i>
	  </div>
	 </div>
  </div>
</section>


<section id="dog-nd-cutomerlist">
	<div className="container-fluid no-padding">

{ state.trainerData.map(function(a){
    return(
	   <div className="main-info">
		<div className="row info-inner">
			 <div className="col-4 col-sm-4 col-md-4 no-padding text-center">
				  <img src={dog5} alt="dog" className="img-responsive dogimg1"/>
			 </div>	
			 <div className="col-4 col-sm-4 col-md-4 no-padding text-center">
				 <p className="text-center first-info">Dog Name</p>
				 <h4 className="text-center scnd-info">Tommy</h4>
				 <p className="text-center first-info">Puppy Raiser</p>
				 <h4 className="text-center scnd-info">Ricky Pointing</h4>
			 </div>
			 <div className="col-4 col-sm-4 col-md-4 no-padding text-center">
				  <img src={customer} alt="customer" className="img-responsive dogimg1" />
			 </div>	
		 </div>
	{/*	 <div className='blackOverLay' style="left:{{swipeLeft}}" ng-swipe-right=swipeFunRight(this)>
						<div className='percent_30 f_left' ng-click='redirectToDogBio($event,data.dogs_id)'>View</div>
						<div className='percent_30 f_right' ng-click='requestProcess($event,data.request_id,data.name,data.dogs_id,data.users_id)'>Edit</div>
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
const mapStateToProps = (state) => {return {state:state}}
export default connect(mapStateToProps)(Dogs);
