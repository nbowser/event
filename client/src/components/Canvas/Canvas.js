// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {SketchField, Tools} from 'react-sketch';

const Nav = (props) => (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Event Assistant</a>
      <a className="text-white"></a>      
      <Link to="/detail">Details</Link>
      <Link to="/auth/logout">Logout</Link>
      <button onClick = {props.handleLogout}>Log Out</button>
    </nav>
  );

  // const Canvas = () => (
  //   <div>
  //     <Nav />
  //     <h1>Canvas</h1>
  //     <p>canvas page
  //     </p>
  //   </div>
  // );
  
  // export default Canvas;

 
class Canvas extends React.Component {
      state = {
       tool: Tools.Pencil
// Tool.Pencil
 };
 
 handlePencil = () => {
   console.log("pencil");
   this.setState({ tool: Tools.Pencil});
 };
 handleLine = () => {
    this.setState({ tool: Tools.Line});
   console.log("line");
 };
 handleRectangle = () => {
   this.setState({ tool: Tools.Rectangle });
   console.log("rec");
 };
 handleCircle = () => {
  this.setState({ tool: Tools.Circle });
   console.log("circle");
 };
 savePlan = () => {
   console.log("save");
   //save this to db set the state
 }

     render() {
        return (
          <div>
            <Nav />
            <button onClick={this.handlePencil}>Pencil</button>
            <button onClick={this.handleLine}>Line</button>
            <button onClick={this.handleRectangle}>Rectangle</button>
            <button onClick={this.handleCircle}>Circle</button>
            {/* <button onClick=</button> */}
            <button onClick={this.savePlan}>Save</button>
              <SketchField width='100%' 
                         height='768px' 
                         tool={this.state.tool} 
                         lineColor='black'
                         lineWidth={3}/>
                         
         
          
           
           </div>
        )
     }
}

export default Canvas;