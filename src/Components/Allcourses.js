import React from "react";
import Course from "./Course";
import { useState ,useEffect } from "react";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const Allcourse = () =>
{


    useEffect(() =>
    {
        alert("warning");
    })
const getAllCoursesFromServer =() =>
{
    axios.get(`${base_url}/courses`).then(
        (response) =>
        {
            console.log(response);
            toast.success("courses loaded",{
                position:"bottom-center"
            });
            setCourses(response.data);
        },
        (error) =>
        {
            console.log(error);
            toast.error("something went wrong");
        }
    )
    
}
useEffect(()=>
{
    getAllCoursesFromServer();},[]);
    const [courses ,setCourses] =useState([
    
        {title:"Java course",
        description:"It is a beginner java course",
    },
    {
        title:"C++ course",
        description:"It is a beginner C++ course",  
    },
    {
        title:"Python course",
        description:"It is a beginner Python course",  
    },
    ]);
    return(
        <div>
             <Button onClick={() =>
            {
                console.log("test");
               
                setCourses([...courses,{
                    title:"angular",
                    description:"this is a demo course",
                }])
            }}>Test</Button>
            <h1>All course</h1>
            <p>List of courses are as follows</p>
            {
                courses.length >0?courses.map((item) =><Course key={item.id} course={item} />) :"No courses"
            }
        </div>
    );
    };
    export default Allcourse;
    
