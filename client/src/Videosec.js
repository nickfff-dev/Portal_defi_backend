import React, { Component } from 'react';
import "./videosec.css";
import embeddata from './embedyoutube';
import { Embed } from 'semantic-ui-react'

class Videosec extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            dataforembed: embeddata
        }
    }



    onClickHandler(e) {
        e.target.url=`https://www.youtube.com/embed/${e.target.id}/?autoplay=1`
    }
  


    render() {  
        return (
            <div className="section video-section" id="videos">
            <div className="black-fade"></div> 
            <div className="container">
        
                <h3>Video Gallery</h3>
                
        
                <div className="breweries">
                    <ul>
                        {this.state.dataforembed.map((embedy, index)=>{ 
  return (
      <li key={index}>  <Embed as="div"    url={`https://www.youtube.com/embed/${embedy.id}`} width="100%" height="500" active={true}  onClick={this.onClickHandler.bind(this)}  className="embed" style={{ background: `url(${embedy.placeholder}) center center / cover rgb(0, 0, 0)`,  width: "339px", height: "149px" }}/> 
      <p>{embedy.title}</p>  </li>)})}
        
                    </ul>
                </div>
        
            </div>
        </div>
        );
    }
}

export default Videosec;