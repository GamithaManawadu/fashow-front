import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../Button';
import '../../App.css';
import Banner from '../Banner';
import Address from '../Address';
import '../Contact.css';







export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          mobile: '',
          message:'',
          email:'',

          nameError: '',
          mobileErro: '',
          messageError:'',
          emailError:''

        };
      }
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeMobile(e) {
        this.setState({
          mobile: e.target.value
        })  
      }
      onChangeMessage(e) {
        this.setState({
          message: e.target.value
        })
      }

      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

      validate = () => {
        let isError = false;
    
        const errors = {
            nameError: "",
            mobileError: "",
            messageError:"",
            emailError:""
        };
    
          if(this.state.name.length < 3){
              isError = true;
              errors.nameError = " Name must be at least 3 characters";
          }

          if(this.state.mobile.length < 10){
            isError = true;
            errors.mobileError = "Mobile Number must be at least 10 numbers";
        }

        if(this.state.email.indexOf("@") === -1){
            isError = true;
            errors.emailError = "Require Valid Email Address";
        }

        if ("email" !== undefined){
            var patter = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!patter.test(this.state.email)){
              isError = true;
              errors.emailError = "Please enter valid email address"
            }
          }
    
          if ("mobile" !== "undefined") {
              var pattern = new RegExp(/^[0-9\b]+$/);
              if (!pattern.test(this.state.mobile)) {
                isError = true;
                errors.mobileError = "Please enter a valid mobile number";
              }else if(this.state.mobile.length < 10){
                isError = true;
                errors.mobileError = "Please enter valid phone number.";
              }
          }

          if(this.state.message === ""){
            isError = true;
            errors.messageError = "Please enter your message";
          }
    
          this.setState({
            ...this.state,
            ...errors
        });
      
        return isError;
     };
    
    
      onSubmit(e) {
        e.preventDefault();


        const err = this.validate();
      if(!err){

        const obj = {
          name: this.state.name,
          mobile: this.state.mobile,
          message: this.state.message,
          email: this.state.email

        };
        axios.post('http://localhost:4000/feedback/add', obj)  //http://localhost:4000/business/add
            .then(res =>
                {
                    alert('Your Feedback Added Successfully ')
                console.log(res.data);
        
        

        })
        
      }
    }
     


    render() {
        return (
        
        
     <>
        <Banner/>

        <Address/>
        
        <div className="cont" style={{marginTop: 10}}>
                <h3 className="title"><center>Get In Touch</center></h3>
                <p>Our team is happy to answer your questions. Fill out the form and
we’ll be in touch as soon as possible.</p>
                <form onSubmit={this.onSubmit}>
                <div className="form-container">
                    <div className="form-group">
                        <label>Your Name  </label>
                        <input 
                         type="text"
                         placeholder="Your Name"
                         className="name-control"
                         value={this.state.name}
                      onChange={this.onChangeName}
                      />
                       <span className="text-danger">{this.state.nameError}</span>
                       </div>
                       <div className="form-group1">
                    
                        <label>Your Phone Number </label>
                        <input type="text" 
                        placeholder="Your Mobile Number"
                        className="form-control"
                        value={this.state.mobile}
                      onChange={this.onChangeMobile}
                      />
                       <span className="text-danger">{this.state.mobileError}</span>
                    </div> 
                    <div className="form-group2">
                        <label>Your Message </label>
                        <input type="text" 
                        placeholder="Your Message"
                        className="message-control"
                        value={this.state.message}
                      onChange={this.onChangeMessage}
                        />
                         <span className="text-danger">{this.state.messageError}</span>
                        </div>
                        <div className="form-group3">
                        <label>Your Email </label>
                        <input type="text" 
                        placeholder="Your Email"
                        className="email-control"
                        value={this.state.email}
                      onChange={this.onChangeEmail}
                        />
                         <span className="text-danger">{this.state.emailError}</span>
                    </div>

                    <div className="form-group4">
                        < input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                    </div>
                </form>
            </div>
            
    </>
       
        )
    }
}

