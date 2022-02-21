import React, { Component } from 'react';
import "./press.css"
import coindesk from './images/logos/coindesk.png';
import cointelegraph from "./images/logos/Cointelegraph_logo.png";
import businesswire from "./images/logos/businesswire.png";
import finsmes from "./images/logos/finsmes-logo.png"

class Press extends Component {
    render() {
        return (
            <div className="section press" id="press">
    <div className="container">
        <div className="text">
            <h1>Featured in</h1>
        </div> 

        <div className="press">
    <div className="logos">
        <img src={coindesk} alt="coindesk"/>
        <img src={cointelegraph} alt="cointelegraph"/>
        <img src={businesswire} alt="businesswire"/>
        <img src={finsmes} alt="finsmes"/>
    </div>
</div>

    </div> 
</div>
        );
    }
}

export default Press;