import React, { Component } from 'react';
import "./header.css";
import Logo from "./images/portal-logo.gif"
import Menuopen from "./images/menu-open.svg"
import Menuclose from "./images/menu-close.svg"





class Header extends Component {
  constructor(props) { 
    super(props);
    

    this.mwaref = React.createRef();
    this.menuClose = this.menuClose.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
    this.handleResize = this.handleResize.bind(this);


  }

 




  menuOpen() {
    this.mwaref.current.style.display = "block";
    this.mwaref.current.style.width = "50%";

  }
  menuClose() {
    this.mwaref.current.style.display = "none";
  }
 
  handleResize = () => { 
    if (window.innerWidth < 880) {  
      document.getElementById("menu").classList.add("mobile");
    }
    else { 
      document.getElementById("menu").classList.remove("mobile");
    }
  }

  componentDidMount() { 
    window.addEventListener("resize", this.handleResize);
  }

    render() {
        return (
            <div className="header">
            <div className="header-container">
              <div className="logo">
                <img src={Logo} alt="header-logo"/>
              </div>
              <div className="menu-container">
                <div className="menu-open" onClick={this.menuOpen}>
                  <img src={Menuopen} alt="open-menu" /> 
                </div>
                <div className="menu" id="menu" ref={this.mwaref}>
                  <div className="menu-close" onClick={this.menuClose}>
                    <img src={Menuclose} alt="close-menu"/> 
                  </div>
                  <div className="tabs" id="website-menu">
                    <a href="/" className="selected">DeFi on Bitcoin</a>
                    <a  href="#team">Team</a>
                    <a href="#investors">Investors</a>
                    <a href="#press">Press</a>
                    <a href="https://docs.google.com/forms/d/1k_D4mqssNjJ2x7feI19WMA8fzH2yNuyE-WLaMaxwKQY/edit?ts=6165db19" target="_blank" rel="noreferrer">Ambassador</a>
                    <a href="https://docsend.com/view/pdk55ecxmuewiy8f" target="_blank" rel="noreferrer"> Whitepaper</a>
                    <a href="https://twitter.com/portal_finance" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i> @portal_finance</a>
                  </div>
                  <a className="join" href="https://go.portaldefi.com/whitelist-homepage" target="_blank" rel="noreferrer">Whitelist</a>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Header;