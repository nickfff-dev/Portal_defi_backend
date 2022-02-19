import React, { Component } from 'react';
import "./exchange.css"

class Exchange extends Component {
    render() {
        return (
            <div className="section exchange" id="intro">
            <div className="black-fade"></div>      
            
                <div className="container">
                    
                    <span className="subline">Our Mission is to deliver freedom, one application at a time</span>
                    <h1>Data and Computation Markets</h1>
                            
                    <div className="text">
                        <p>Portal’s layer 2 and layer 3 atomic swap technology can be used for a general purpose market for data and computation. Our goal is to replace the web server model which is prone to centralization by design and architecture with a free market for data and computation. Fabric, the underlying protocol Portal uses extends Bitcoin’s functionality today without needing any BIPs.</p>        
                    </div> 
            
                    <div className="features">
                        <span><b>Information Markets</b><br/>Tiny, layer 3 contracts for data stored in a decentralized fashion replace the web server model where the fees provide resistance against censorship of information.</span>
                        <span><b>Computation Markets</b><br/>Users are able to deploy complex programs for blinded execution by a network of peers. Portal swaps pay bonded Bitcoin when “requests for computation” are answered. Contracts assure proof of performance and payment for either party.</span>
                    </div> 
                    
                    <img src="https://portaldefi.com/assets/laptop-illustration.png" className="to-laptop" alt="laptop" />
            
                
                </div> 
                
            </div>
        );
    }
}

export default Exchange;