import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";
import DeleteBtn from "../DeleteBtn";



// const Home = (props) =>{
// 	return (
// 		<div>
// 			<h1>You should only see this if you are logged in!</h1>
// 			<p>{props.auth.username}</p>
// 			<button onClick = {props.handleLogout}>Log Out</button>
// 		</div>
// 	);
// };

const Nav = (props) => (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand" href="#">Event Assistant</span>
      <span className="text-white"></span>
      <Link to="/detail">Details</Link>
      <Link to="/auth/logout">Logout</Link>
      <button onClick = {props.handleLogout}>Log Out</button>
    </nav>
  );

  class Home extends Component {
   
    state = {
      eventsArray: [],
      eventName: "",
      eventDate: "",
      eventClient: ""
    };

    handleInputChange = event => {
      console.log(event);
      let {name, value} = event.target;

      this.setState ({
        [name]: value
      });

    };


    render() {
      return(
        <div>
          <Nav />
       
        <Container fluid>
        
          <Row>
          <Col size="md-6">
		  	  {/* <h1>Hello {props.auth.username}</h1> */}
              <h2>Make new event</h2>
              <form>
                <Input 
                  value={this.state.eventName}
                  onChange={this.handleInputChange}
                  name="eventName"
                  placeholder="Event Name (required)"
                />
                <Input 
                  value={this.state.eventDate}
                  onChange={this.handleInputChange}
                  name="eventDate"
                  placeholder="Event Date (required)"
                />
                <Input
                  value={this.state.eventClient}
                  onChange={this.handleInputChange}
                  name="eventClient"
                  placeholder="Client (optional)"
                />
                <FormBtn
                  disable={!(this.state.eventName && this.state.eventDate)}
                  onClick={this.handleFormSubmit}
                >
                  Save Event
                </FormBtn>
              </form>
            </Col>

            <Col size="md-6">
            <h2>Events</h2>
            {this.state.eventsArray.length ? (
              <List>
                {this.state.eventsArray.map(event => (
                  <ListItem key={event._id}>
                    <Link to={"/home/" + event._id}>
                      <strong>
                        {event.eventName} by {event.eventDate}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                  </ListItem>
                ))}       
            </List>
            ): (<h3>:</h3>)}
            </Col>
            </Row>

            <Row>
              <Col size="md-4">
                  <ul>
                  <h2>Other options</h2>
                    {/* <li>Rolodex</li> */}
                    <li><Link to="/rolodex">Rolodex</Link></li>
                    {/* <li>Post Event</li> */}
                    <li><Link to="/postedEvent">Posted Events</Link></li>
                  </ul>
           
            </Col>
          </Row>
        </Container>
        </div>
      );
     }
    }

export default Home;