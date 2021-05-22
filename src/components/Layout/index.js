import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
       <Header />
       {
         props.sidebar ?
         <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li><NavLink exact to={`/home`}>Home</NavLink></li>
                <li><NavLink to={`/hospital`}>Hospitals</NavLink></li>
                <li><NavLink to={`/category`}>Category</NavLink></li>
                <li><NavLink to={`/drcategory`}>Doctor Category</NavLink></li>
                <li><NavLink to={`/doctor`}>Doctors</NavLink></li>
                <li><NavLink to={`/user`}>Users</NavLink></li>
                <li><NavLink to={`/orders`}>Appointments</NavLink></li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
       }
        
        
    </>
   )

 }

export default Layout;