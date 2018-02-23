import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router,Link,withRouter} from "react-router-dom";

const Footer = ({history}) =>{
return (
 <div className='footer'>
  <Router >
  <div>
    <Link className='footerLink' to={'/'} onClick={e=>{e.preventDefault(); history.push('/')}}><i className="fa fa-home fa-lg"></i><br/>Home</Link>
    <Link className='footerLink' to={'/People'}onClick={e=>{e.preventDefault(); history.push('/People')}}><i className="fa fa-user fa-lg"></i><br/> People</Link>
    <Link className='footerLink' to={'/Dogs'}     onClick={e=>{e.preventDefault(); history.push('/Dogs')}}><i className="fa fa-paw fa-lg"></i><br/> Dogs</Link>
    <Link className='footerLink' to={'/Settings'} onClick={e=>{e.preventDefault(); history.push('/Settings')}}><i className="fa fa-cog fa-lg"></i><br/> Settings</Link>
  </div>
 </Router>
</div>
)
}
export default withRouter(connect()(Footer))