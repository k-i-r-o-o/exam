import React from 'react';
import "./App.css";
import {Button, Container,Row,Col} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Course from './Components/Course';
import Allcourses from './Components/Allcourses';
import AddCourse from './Components/AddCourse';
import Header from './Components/Header';
import Menus from './Components/Menus';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <div>
      
 <Router>
 <ToastContainer />
   <Container>
   <Header />
    <Row>
      <Col md={4}>
<Menus />
      </Col>
    <Col md={8}>
      <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/add-course' element={<AddCourse />}></Route>
    <Route exact path='/view-courses' element={<Allcourses />}></Route>
    </Routes>
    </Col>
    </Row>  
   </Container>
 </Router>
    </div>
  );
}

export default App;
