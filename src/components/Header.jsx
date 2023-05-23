import React from "react";
import { Component } from "react";


class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Estate Pro v2</h1>
        <h2>Task No. 1 - Record Client Contact Information</h2>

        <form action="" className="contactForm">
        <label htmlFor="name">Enter Client Name</label>
        <input id= 'name'type="text" placeholder="Last Name, First Name, M.I."/>
        <label htmlFor="email">Enter Email Address</label>
        <input id= 'mobile'type="text" placeholder="Enter Email Address"/>
        <label htmlFor="email">Enter Phone Number</label>
        <input id= 'mobile'type="text" placeholder="Enter Mobile Phone Number"/>
        </form>

        
      </div>
    );
  }
}

export default Header