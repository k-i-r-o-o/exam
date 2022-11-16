import React from "react";
import { Card,CardBody, CardTitle, CardText,cardFooter, Button,Container, CardSubtitle, } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course,update})=>
{

    const deleteCourse =(id) =>
    {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) =>
            {
                toast.success("course deleted");
                update(id);
            },
            (error)=>
            {
                toast.error("something went wrong");
            }

        )
    }
    return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="fontt-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={(id) =>
                {
                  deleteCourse(course.id); 
                }}>Delete</Button>
                <Button color="warning ml-3">Update</Button>
            </Container>       
        </CardBody>
    </Card>
    );
}
export default Course;