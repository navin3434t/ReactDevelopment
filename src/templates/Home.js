import React from 'react'
import Header from '../headers/Header'
import Footer from '../templates/Footer'
import dog5 from '../images/dog5.jpg'
import Clock from 'react-live-clock';
import { connect } from 'react-redux'
import {getHomeData} from '../actions/actions'
const stt={
         fontSize:'17px',
         textAlign:'center'
}
const DateCal=()=>{
		    let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
			let dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			let newDate = new Date();
			let x=dayNames[newDate.getDay()] + " "+ newDate.getDate() + ', ' + monthNames[newDate.getMonth()] + ' ';

	return(
    <div  style={stt}>{x}</div>
	)
}
const Home=({dispatch,state})=>{
	
	if(state.homeData===undefined){
		dispatch(getHomeData(state.user.id,state.user.webservice_token))
		return(
		<div></div>)
	}
	else{
	return(
	<div>
	<Header/>
	<div>
	<section id="dogprofile">
	<div className="color-overlay">
		<div className="container-fluid">
			<div className="row">	
				<div className="clock">
					<Clock id="time" format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} />
					<DateCal/>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="doglist">
	<div className="container-fluid">
	{ state.homeData.map(function(a){
			return(
			<div className="row" key={a.id}>
			<div className="col-12 col-sm-12 col-md-12 mrgn-t">
				<div className="liststyle" >
					<div className="row">
						<div className="col-3 col-sm-3 col-md-2">
							<div className="dogimg">
								<img src={state.serverLink+a.image} alt="dog" />
							</div>
						</div>
						<div className="col-9 col-sm-9 col-md-10">
							<h4><span>{a.req_reason}</span></h4>
							<h5>Date:{a.req_start_date} to {a.req_end_date}</h5>
							<h6>{a.firstName} {a.lastName}</h6>
						</div>
					</div>
				{/*	<div className='blackOverLay' >
						<div className='percent_30 f_left'>reject</div>
						<div className='percent_30 f_right'>Accept</div>
					</div> */}
				</div>
			</div>
		</div>)
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

export default connect(mapStateToProps)(Home)