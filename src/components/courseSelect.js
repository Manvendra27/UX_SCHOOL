import React,{ Component } from 'react'
import {Input,Label,Button,Card,CardBody,CardImg,CardTitle} from 'reactstrap'
import { Carousel,Form} from 'react-bootstrap'
import './basicInfo.css'
import axios from 'axios'
class CourseSelect extends Component {

    state = {
        course: '',
        state: '',
        referral: '',
        // courseError: "",
        stateError: "",
        
    }
    validate = () => {
        // let courseError: "";
        let stateError: "";

        if (!this.state.state) {
            stateError = "Please enter state you live in";
        }
        if (stateError) {
            this.setState({stateError});
            return false;
        }
        return true;
    }

    handleStateChange = event => {
        this.setState({
            state: event.target.value
        });
    }

    handleRefChange = event => {
        this.setState({
            referral: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const user = {
                name: JSON.parse(window.localStorage.getItem("userdata"))["name"],
                email: JSON.parse(window.localStorage.getItem("userdata"))["email"],
                mobile: JSON.parse(window.localStorage.getItem("userdata"))["mobile"],
                course: "QuickClass - Graphic & UI",
                state: this.state.state,
                referral: this.state.referral,
                
            };
    
    
            // var formBody = [];
            // for (var property in user) {
            //     var encodedKey = encodeURIComponent(property);
            //     var encodedValue = encodeURIComponent(user[property]);
            //     formBody.push(encodedKey + "=" + encodedValue);
            // }
            // formBody = formBody.join("&");
    
            fetch('https://ux-school.herokuapp.com/api/auth/signup', {
                    method: 'POST',
                    mode:'cors',
                    body: JSON.stringify(user),
                    
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json ',
                    },
                })
            

              
              .then(function (user) {
                // alert(JSON.stringify(user));
                window.location = '/payment'
              });
        }
        
    }

    render() {
        return (
            <div>
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
                    <label style={{fontSize:'20px'}}>Course</label> <br/>
                    <Form.Group name='course' controlId="exampleForm.ControlSelect1">
        
                        <Form.Control className='courseSelect' as="select">
                        <option className='courseInput' style={{color:'#FF6F6F'}}>QuickClass - Graphic & UI</option>
                        </Form.Control>
                    </Form.Group>
                    <br/><br/>
                    <label style={{fontSize:'20px'}}>State</label> <br/>
                    <input name='state' type='text' onChange={this.handleStateChange} ></input>
                    <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.stateError}
                        </div>
                    <br/><br/><br/>
                    <label style={{fontSize:'20px'}}>Referral Code</label> <br/>
                    <input name='referral' type='text' onChange={this.handleRefChange}></input>
                    <br/><br/><br/>
                    <Button color='secondary' type='submit' className='nextBtn' >Done</Button>
                    <br/>
                    <span style={{color:'#707070'}}>By signing up I agree to Terms of services & Privacy Policy.</span>
                    </form>
                </div>
            </div>
            </div>
        </div>
            </div>
        )
    }
}

export default CourseSelect