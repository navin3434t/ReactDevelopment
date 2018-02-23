import React from 'react';
import { connect } from 'react-redux'
import {Link,withRouter} from "react-router-dom";

const HeaderListing=({history})=>(
	<header className="headerstyle">
	<div className="container-fluid">
		<div className="row">
			<div className="col-12 col-sm-12 col-md-12 head">
				<h4>Dog Finder <Link  to={'/addDog'} onClick={e=>{e.preventDefault(); history.push('/addDog')}}><i className="fa fa-paw fa-lg header-dog-icon"></i></Link></h4>
			</div>
		</div>
	</div>
</header>
	)
export default withRouter(connect()(HeaderListing))