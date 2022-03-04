import React, { Component } from 'react';
import "./footer.css";
import logo from "./images/portal-logo.gif"

class Footer extends Component {
    render() {
        return (
            <div className="section footer">
            <div className="container">
            <p>Interested in joining us? <a href="https://angel.co/company/portal_finance/jobs">See our job listings</a></p>
              <ul className="feature-resources">
                <li><div className="left"><img src={logo} className="logo-footer" alt="logofoot"/></div></li>
                <li><a href="https://github.com/FabricLabs/fabric" ><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://twitter.com/portal_finance" ><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://t.me/getportal" ><i className="fa-brands fa-telegram"></i></a></li>
                <li><a href="https://medium.com/@Portal_team" ><i className="fa-brands fa-medium"></i></a></li>
                <li><a href="https://www.linkedin.com/company/18201464" ><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://PortalFinance/" ><i className="fa fa-user-astronaut"></i></a></li>
                <li><a href="https://discord.com" ><i className="fa-brands fa-discord"></i></a></li>
                <li><a href="https://www.reddit.com/r/PortalFinance/" ><i className="fa">&#xf4fb;</i></a></li>
              </ul>
              <div className="wrapper" style={{textAlign: "center", width:"100%", opacity: "0.6"}}>
                <p className="small">&copy; 2022 Tides.Network Inc.  All rights reserved.</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;