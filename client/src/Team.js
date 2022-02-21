import React, { Component } from 'react';
import "./team.css"
import eric from "./images/eric.png"
import jack from "./images/jack.png"
import mano from "./images/manoj.png"
import george from "./images/george.png"
import johnny from "./images/johnny.png"
import chandra from "./images/chandra.png"
import alexey from "./images/alexey.png"
import farid from "./images/farid.png"


class Team extends Component {
    render() {
        return (
            <div className="section team" id="team">
            <div className="container">
        
                <div className="text">
                    <h1>Team</h1>
                    <p>Product, Growth &amp; Deep Crypto Expertise</p>            
                </div> 
                
                <div className="row">
            <div className="column">
                <div className="card">
                <div className="team-container">
                    <img src={eric} className="circletag" alt="eric"/>
                    <h2 className="team-title">Eric Martindale</h2>
                    <p className="team-role">Co-founder, CEO</p>
                    <p className="team-description">10 years in Bitcoin, Head of Open Source at Blockstream and Engineering at BitPay, advisor to Lemniscap, and is the inventor of Fabric.</p>
                </div>
                </div>
            </div>
        
            <div className="column">
                <div className="card">
                <div className="team-container">
                    <img src={jack} className="circletag" alt="jack"/>
                    <h2 className="team-title">Jack Mills</h2>
                    <p className="team-role">COO</p>
                    <p className="team-description">Engineering Architect of Casper Labs / RChain, and previous Director of Enterprise Platforms at Intel. Engineering at Stanford.</p>
                </div>
                </div>
            </div>
        
            <div className="column">
                <div className="card">
                <div className="team-container">
                    <img src={mano} className="circletag" alt="mano"/>
                    <h2 className="team-title">Manoj Duggirala</h2>
                    <p className="team-role">Co-founder, Technology</p>
                    <p className="team-description">2x startup founder. Led a 150-engineer teams, designed advanced anlytics platform. Previously @IBM Almaden, @Invensense. Engineering at Stanford.</p>
                </div>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="column">
                <div className="card">
                <div className="team-container">
                    <img src={alexey} className="circletag" alt="alexy"/>
                    <h2 className="team-title">Alexey Melnichenko</h2>
                    <p className="team-role">Engineering</p>
                    <p className="team-description">5 years architecting token &amp; exchange design, engineer at Phantom Cyber (acquired by Splunk), designed the exchange engine at Totle.</p>
                </div>
                </div>
            </div>
        
          <div className="column">
            <div className="card">
              <div className="team-container">
                <img src={chandra} className="circletag" alt="chandra"/>
                <h2 className="team-title">Dr.Chandra Duggirala</h2>
                <p className="team-role">Co-founder, Product</p>
                <p className="team-description">Bitcoiner and M.D. turned entrepreneur, ran two 8-figure software businesses, and is the inventor of functional layer 2 cross-chain atomic swaps (he solved problems keeping Tier Nolan’s atomic swaps impractical until now).</p>
              </div>
            </div>
          </div>
        
          <div className="column">
            <div className="card">
              <div className="team-container">
                <img src={george} className="circletag" alt="george"/>
                <h2 className="team-title">George Burke</h2>
                <p className="team-role">Co-founder, Community Builder</p>
                <p className="team-description">8 years in bitcoin, 3 exits in peer-to-peer/community startups incl. early bitcoin exchange Crypto Street, created the first Bitcoin debit card, and runs the world’s oldest bitcoin meetup.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
        
            <div className="column">
              <div className="card">
                <div className="team-container">
                    <img src={johnny} className="circletag" alt="johny"/>
                    <h2 className="team-title">Johnny Dilley</h2>
                    <p className="team-role">Business Development</p>
                    <p className="team-description">VP of Strategy &amp; Product at Blockstream. Conceptualized Liquid sidechains. Early VC at Pantera. 8 years in Bitcoin.</p>
                </div>
                </div>
            </div>
        
            <div className="column">
              <div className="card">
                <div className="team-container">
                    <img src={farid} className="circletag" alt="farid" />
                    <h2 className="team-title">Farid Azizov</h2>
                    <p className="team-role">Wallet Architect</p>
                    <p className="team-description">Expert in open source wallet architecture and mobile development.</p>
                </div>
                </div>
            </div>
        
        </div>
        
        
        
            </div> 
        </div>
        );
    }
}

export default Team;