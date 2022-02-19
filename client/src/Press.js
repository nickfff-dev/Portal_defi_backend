import React, { Component } from 'react';
import "./press.css"

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
        <img src="https://portaldefi.com/assets/logos/coindesk.png" alt="coindesk"/>
        <img src="https://portaldefi.com/assets/logos/Cointelegraph_logo.png" alt="cointelegraph"/>
        <img src="https://portaldefi.com/assets/logos/businesswire.png" alt="businesswire"/>
        <img src="https://portaldefi.com/assets/logos/finsmes-logo.png" alt="finsmes"/>
    </div>
</div>

    </div> 
</div>
        );
    }
}

export default Press;