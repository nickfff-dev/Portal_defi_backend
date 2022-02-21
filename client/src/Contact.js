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
    
    // function for adding typedin subject text  to state
    onSubjectChange(event) {
        event.preventDefault()
        
        this.setState({subject: event.target.value})
    }

    // function for adding typedin email text  to state
    onEmailChange(event) {
        event.preventDefault()
        
        this.setState({email: event.target.value})

    }

    // function for adding typedin message text  to state
    onMessageChange(event) {
        event.preventDefault()
        
        this.setState({message: event.target.value})
    }
    
   


    // function to remove entered values from ui after submit
    resetForm(){
        return this.setState({
            subject: '',
            email: '',
            message: ''
        })
    }

    // function to send email to backend
    handleSubmit(e) {
        e.preventDefault();
    //   check if email is not empty and message is not empty then send to back end else alert user to fill
       if( this.state.subject !== '' && this.state.email !== '' && this.state.message !== '' )
        
       {
        //    get data from state to axios data object
        const data = {
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message
        }
        //   use axios to make the post request to backend and bind the response to the res variable
          axios.post('/api/sendMessage', data)
          .then((res)=>{
            
              if (res.data === "Send email successfully") {
                // alert if email sent succesfully
              alert("Message Sent.");
              this.resetForm()
  
              
            } else {
                // alert if error in sending message from backend
                alert("Message failed to send.")
                this.resetForm()
            }
          })
         
       } else { 
        //    alert if field is empty
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