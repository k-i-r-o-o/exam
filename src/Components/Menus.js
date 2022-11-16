import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup ,ListGroupItem } from 'reactstrap';

const Menus=()=> {
  return (
    <div>
  <ListGroup>
  <Link className="list-group-item list-group-item-action" tag="a" to='/' action>
   Home
  </Link>
  <Link  className="list-group-item list-group-item-action"tag="a" to='/add-course' action>
   Add COurses
  </Link>
  <Link className="list-group-item list-group-item-action" tag="a" to='/view-courses' action>
   View
  </Link>
  <Link  className="list-group-item list-group-item-action"tag="a" to='#!' action>
   About
  </Link>
  <Link className="list-group-item list-group-item-action" tag="a" to='#!' action>
   Contact
  </Link>
</ListGroup>
    </div>
  )
}

export default Menus;