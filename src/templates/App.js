import React from 'react';
import Home from '../templates/Home';
import Login from '../templates/Login';
import Dogs from '../templates/Dogs';
import addDog from '../templates/addDog';
import addPerson from '../templates/addPerson';
import People from '../templates/People';
import Settings from '../templates/Settings';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import { connect } from 'react-redux'
import "../css/font-awesome.min.css"
import loading from "../images/loading.gif"




const App=({activePage})=>{ 
        console.log(activePage);
	     if(activePage.user===undefined){
		return(
		<BrowserRouter>
		  <Switch>
          <Route component={Login} />
		  </Switch>
		  </BrowserRouter>
		)
	  }
		
	else{
		
	return(
			<div>
			
			<BrowserRouter>
			<div>
			<Switch>
			
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Dogs' component={Dogs} />
            <Route exact path='/People' component={People} />
            <Route exact path='/Settings' component={Settings} />
			<Route exact path='/addDog' component={addDog} />
			<Route exact path='/addPerson' component={addPerson} />
			</Switch>
            </div>
            </BrowserRouter>
			
			<div className='loadingIndi' id='loadingIndicator'>
	           <div className='load_inner_container'>
		           <div className='super_inner_container'>
			           <div className='bold_text'>Loading</div>
			           <div className='smaller_text'><img src={loading}/></div>
		           </div>
	           </div>
	        </div> 
			</div>
)
	}
}
const mapStateToProps = (state) => {
  return {
    activePage:state
  }
}
export default connect(mapStateToProps)(App);
