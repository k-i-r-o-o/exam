import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";
import {useEffect} from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const AddCourse = () =>
{
    useEffect(() =>
    {
        document.title="ADD COURSE"
    } ,[]); 
    const [course , setCourse] =useState({});
    const handleForm=(e) =>
    {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }
    //creating dataa to post data on server
    const postDatatoServer =(data) =>
    {
axios.post(`${base_url}/courses`,data).then(
    (response) =>
    {

console.log(response);
console.log("success");
toast.success("Course Added successuly");
setCourse({id:" ",title:"",description:""})
    },
    (error)=>
    {
        console.log(error);
console.log("something went wrong");
toast.error("error occured");
    }
)
    }
    return(
    <Fragment>
        <h1 className="text-center my-3">Fill Course Detail</h1>
<Form onSubmit={handleForm}>
    <FormGroup>
        <label for="userId"> Course Id</label>
        <input type ="text" placeholder="Enter here"
        name="userId"
        id="userId" 
        onChange = {(e)=>
            {
    setCourse({...course,id:e.target.value});
            }}/>
   
    </FormGroup>
    <FormGroup>
        <label for="title">Course Title</label>
        <input type="text" placeholder="Enter title here"
        id="title "
        onChange={(e)=>
            {
               setCourse({...course,title:e.target.value})
            }} />
    
    </FormGroup>
    <FormGroup>
        <label for="description">Course Description</label>
        <input type="textarea" placeholder="Enter description here"
        id="description" style={{height:400,
        width:400}} 
        
        onChange={(e)=>
            {
               setCourse({...course,description:e.target.value})
            }}/>
   
    </FormGroup>
    <Container className="text-center">
        <Button type="submit" color="success">
            Add Cours
        </Button>
        <Button type="reset" color="warning ml-2" onClick={(e) =>
        {
            setCourse();  
        }}>Clear</Button>
    </Container>
</Form>


    </Fragment>
    );
}
export default AddCourse;