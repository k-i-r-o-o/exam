import React, { useEffect } from 'react';
import { Button } from 'reactstrap';

const Home = () => {

    useEffect(() =>
    {
        document.title="Home || SUYRA'S SITEs"
    } ,[])
    return (
        <div class="jumbotron text-center bg-secondary">
            
                <h1 >Deep Learning of react</h1>
                <p> 
                Developed by Surya Pratap Singh for basic understanding of react
                </p>
                <div class="container " c>
                    <Button color="primary" outline>Start Using</Button>
                </div>
            
        </div>
    );
};

export default Home;