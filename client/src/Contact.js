import React, { Component } from 'react';
import "./contact.css";
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
        
        this.onSubjectChange = this.onSubjectChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }

    onSubjectChange(event) {
        event.preventDefault()
        
        this.setState({subject: event.target.value})
    }
    onEmailChange(event) {
        event.preventDefault()
        
        this.setState({email: event.target.value})

    }
    onMessageChange(event) {
        event.preventDefault()
        
        this.setState({message: event.target.value})
    }
    
   



    resetForm(){
        return this.setState({
            subject: '',
            email: '',
            message: ''
        })
    }
    handleSubmit(e) {
        e.preventDefault();

       if( this.state.subject !== '' && this.state.email !== '' && this.state.message !== '' )
        
       {
        const data = {
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message
        }

          axios.post('/api/sendMessage', data)
          .then((res)=>{
            
            if (res.data === "Send email successfully") {
              alert("Message Sent.");
              this.resetForm()
  
              
            } else  {
                alert("Message failed to send.")
                this.resetForm()
            }
          })
         
   }else{
       alert("Please fill in all fields.")
   }
           
        }

    


    render() {
        return (
            <div className="section institutions" id="institutions">
    
    <div className="container">
      
      
        
        <h1>Contact Us</h1>
                
        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <input className="field" type="text" onChange={this.onEmailChange} placeholder="Email address (required)" style={{marginRight: "4px"}} value={this.state.email} name="email"/>
            <input className="field" type="text" onChange={this.onSubjectChange} placeholder="Subject" value={this.state.subject} name="subject"/>
            <textarea placeholder="Message (required)" onChange={this.onMessageChange} value={this.state.message} name="message"></textarea>
            <button type="submit" className="submit" >contact us</button>
        </form>
    
    
    </div>
    
</div>
        );
    }
}

export default Contact;