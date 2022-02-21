import React, { Component } from 'react';
import "./investors.css"
import cb from "./images/logos/cb.png"
import republic from "./images/logos/republic.svg"
import xrp from "./images/logos/xrp.png"
import b21 from "./images/logos/b21.png"
import okex from "./images/logos/okex.png"
import azer from "./images/logos/azer.jpg"
import kryptal from "./images/logos/kryptal.png"
import ld from "./images/logos/ld.jpg"
import ma from "./images/logos/ma.png"
import ngc from "./images/logos/ngc.png"
import shima from "./images/logos/shima.png"
import gate from "./images/logos/gate.png"
import monday from "./images/logos/monday.jpg"
import wealth from "./images/logos/wealth.jpeg"
import oig from "./images/logos/oig.png"
import taureon from "./images/logos/taureon.png"
import ark from "./images/logos/ark.png"
import lotus from "./images/logos/lotus.png"
import ac from "./images/logos/ac.svg"
import a41 from "./images/logos/a41.png"
import lion from "./images/logos/2-Lion-line.jpg"
import titan from "./images/logos/4 - Titan-Ventures.png"
import bigcoin from "./images/logos/Bigcoin.png"
import ff from "./images/logos/FF_Ventures.jpg"
import panda from "./images/logos/Panda_1.png"
import pragma from "./images/logos/pragma-invest-logo--BK.png"
import r930 from "./images/logos/R-930.png"


class Investors extends Component {
    constructor(props) {
        super(props)
        this.state = {
                investordata: [cb, republic, xrp, b21, okex, azer, kryptal, ld, ma, ngc, shima, gate, monday, wealth, oig, taureon, ark, lotus, ac, a41, lion, titan, bigcoin, ff, panda, pragma, r930]
        }
    }
    render() {
        return (
            <div className="section investors" id="investors">
    <div className="container">

        <div className="text">
            <h1>Some of our backers ...</h1>
        </div> 
        
        <div className="investor_logos">
                        {this.state.investordata.map((item, index) => { 
                            return (
                                <img key={index} src={item} alt={String({item})}/>
                            )
                        })}
</div>

    </div> 
</div>
        );
    }
}

export default Investors;