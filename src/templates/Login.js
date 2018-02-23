import React from 'react';
import {render} from 'react-dom'
import { connect } from 'react-redux'
import  '../css/login.css';
import user_png from '../images/user.png'
import final_image from '../images/final-image.jpg'
import Home from '../templates/Home';
import {login} from '../actions/actions'
import {withRouter } from 'react-router-dom'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
const Login=({dispatch,history})=>{
	let userName
	let passwords
	return(
	<div>
	<div className="main-screen" style={{backgroundImage: "url(" + final_image + ")"}}>
	<div className="customer-profile-main">
		  <div className="profile-area">
			   <img src={user_png} className="img-responisve customer-profile" alt="profile" />
		  </div>					       
	  </div>
	  <div className="login-form-fill">
		  <form className="field-start" onSubmit={e => {e.preventDefault();if (userName.value==="" || passwords.value==="") {return} 
		  dispatch(login(userName.value,passwords.value)).then(function(result){
		       
			  if(result){

                      history.push('/'); 
			  	 
                 
		         
			

		  }
		  else{
		  	  
		  	
			 history.push('/Settings');
		  }
		  });
		  
		  }}>
			 <div className="login-barone">
				 <i className="fa fa-user-o ficon" aria-hidden="true"></i>
				 <input ref={node => {userName = node}} type="text" className="inboxx" placeholder="Username" />
			 </div>
			 <div className="login-barone">
				 <i className="fa fa-lock ficon" aria-hidden="true"></i>
				 <input ref={node2 => {passwords = node2}} type="password" className="inboxx" placeholder="Password" />
			 </div>
			  <input type="submit" className="inboxx2" id="sign-in"
			  value="Sign In"  />
			  <a className="forgetPassword" href="/forgetPassword"><p className="text-center forget-m">Forgot Password?</p></a>
		  </form>
	  </div>
	  
	</div>
	</div>
	)
}
{/*
const mapDispatchToProps = (dispatch,userName,password) => {
  return {
    loginFunction: () => {alert();dispatch(login(userName,password))
    }
  }
} */}

export default connect()(withRouter(Login));