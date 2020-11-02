import React,{Component, useState} from 'react';
import {Input,Label,Button,Card,CardBody,CardImg,CardTitle,FormFeedback} from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import './basicInfo.css';
import { Link } from 'react-router-dom'

class BasicInfo extends Component {
    state = {
        username: '',
        useremail: '',
        mobile: '',
        usernameError: "",
        useremailError: "",
        mobileError: ""
    }

    validate = () => {
        let usernameError = "";
        let useremailError = "";
        let mobileError = "";
    
        if (!this.state.username) {
            usernameError = "Please enter your name";
        }
    
        if (!this.state.useremail.includes("@")) {
            useremailError = "Please enter a valid email";
        }
        if (!this.state.mobile) {
            mobileError = "Please enter your number";
        }
    
        if (useremailError || usernameError || mobileError) {
          this.setState({ useremailError, usernameError , mobileError});
          return false;
        }
    
        return true;
      };

    handleUserChange = event => {
        this.setState({
            username: event.target.value
        });
    }

    handleEmailChange = event => {
        this.setState({
            useremail: event.target.value
        });
    }

    handlePhoneChange = event => {
        this.setState({
            mobile: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid =this.validate();
        if (isValid) {
            
            const user = {
                name: this.state.username,
                email: this.state.useremail,
                mobile: this.state.mobile
            };
    
            window.localStorage.setItem("userdata", JSON.stringify(user))
    
            window.location = "/courseselect"
        }

       
    }

    

    render() {
        

        return (

            <div className='row'>
                <div className='col-sm-12 col-lg-7'>
                <div className='row'>
                    <div className='col-sm-12 logoImg'>
                    <img className='logo' src='logo.png' alt='logo' height='70px' width='107px'></img>
                    </div>
                </div>
                <br/><br/><br/>
                <div className='row'>
                    <div className='col-sm-12 car'> 
                    {/* <Card className='caroselCard' style={{boxShadow:'4px 4px 14px #FF6F6F',margin:'0 4rem',borderRadius:'1rem'}}> */}
                    <Carousel className='caroselCard' style={{boxShadow:'0px 0px 12px #FF6F6F',margin:'0 2rem 0 7rem',borderRadius:'1rem'}}>
                        <Carousel.Item style={{padding:'0.5rem',border:'none'}}>
                        <Card className='cardC' style={{width:'100%',marginRight:'0',border:'none'}}>
                            <CardImg className='cardImg' src="creativity.png" style={{width:'376px',height:'417px',marginLeft:'9rem'}}/>
                            <CardBody className='cardBody' style={{backgroundColor:'#FF6F6F',height:'7rem',borderRadius:'0rem 0rem 1rem 1rem'}}>
                            <CardTitle style={{textAlign:'center'}}>
                            Trigger your creativity
                            </CardTitle>
                            </CardBody> 
                            
                        </Card>
                            
                        </Carousel.Item >
                        <Carousel.Item style={{padding:'0.5rem'}}>
                        <Card className='cardC' style={{width:'100%',margin:'0',border:'none'}}>
                            <CardImg className='cardImg' src="live.png" style={{width:'376px',height:'417px',marginLeft:'9rem'}}/>
                            <CardBody className='cardBody' style={{backgroundColor:'#FF6F6F',height:'7rem',borderRadius:'0rem 0rem 1rem 1rem'}}>
                            <CardTitle style={{textAlign:'center'}}>
                            Non Recorded Live Classes
                            </CardTitle>
                            </CardBody> 
                            
                        </Card>
        
                            
                        </Carousel.Item>
                        <Carousel.Item style={{padding:'0.5rem'}}>
                        <Card className='cardC' style={{width:'100%',margin:'0',border:'none'}}>
                            <CardImg className='cardImg' src="look.png" style={{width:'376px',height:'417px',marginLeft:'9rem'}}/>
                            <CardBody className='cardBody' style={{backgroundColor:'#FF6F6F',height:'7rem',borderRadius:'0rem 0rem 1rem 1rem'}}>
                            <CardTitle style={{textAlign:'center'}}>
                            Let recruiters Look for You
                            </CardTitle>
                            </CardBody> 
                            
                        </Card>
        
                            
                         </Carousel.Item>
                    </Carousel>
                    {/* </Card> */}
                    </div>
                </div>
                </div>
                <div className='col-sm-12 col-lg-5'>
               
                <div className='row'>
                    <div className='col-sm-12 getStart'>
                        <p style={{fontSize:'4rem',marginBottom:'0'}}>Get Started</p>
                        <p style={{paddingLeft:'.6rem'}}>Already have an Account?<a href="#" style={{paddingLeft:'2rem',color:'#FF6F6F',textDecoration:'underline',fontSize:'1.5rem'}}>Signin</a></p>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-sm-12 inputDetails' >
                        <form onSubmit={this.handleSubmit}>
                        <label style={{fontSize:'20px'}}>Name</label> <br/>
                        <input name='username' type='text'  onChange={this.handleUserChange}  ></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.usernameError}
                        </div>
                        <br/><br/><br/>
                        <label style={{fontSize:'20px'}}>Email</label> <br/>
                        <input name='useremail' type='email' onChange={this.handleEmailChange} ></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.useremailError}
                        </div>
                        <br/><br/><br/>
                        <label style={{fontSize:'20px'}}>Mobile</label> <br/>
                        <input name='mobile' type='number' onChange={this.handlePhoneChange}></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.mobileError}
                        </div>
                        <br/><br/><br/>
                        <Button color='secondary' type='submit' className='nextBtn' >Next</Button>
                        </form>
                        <br/>
                        <span style={{color:'#707070'}}>By signing up I agree to Terms of services & Privacy Policy.</span>
                            
                    </div>
                </div>
                </div>
            </div>
        
        );
    }
}

export default BasicInfo
