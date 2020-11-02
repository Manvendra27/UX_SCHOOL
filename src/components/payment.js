import React from 'react';
import { Card,CardBody,Button} from 'reactstrap'
import './payment.css'
import { Link } from 'react-router-dom'

const Payment = props => {
    return (
        <div className='row'>
            <div className='col-sm-12'>
            <div className='row'>
            <div className='col-sm-12'>
            <img className='logo' src='logo.png' alt='logo' height='98px' width='151px'></img>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
            <Card className='paymentCard' >
                <CardBody >
                    <div className='row'>
                        <div className='com-sm-12' >
                            <p style={{fontSize:'20px'}}>Course</p>
                            <h2>QuickClass - Graphics & UI </h2>
                            <p style={{fontSize:'15px'}}>Course fee</p>
                            <p style={{fontSize:'30px'}}><a style={{textDecoration:'line-through red',margin:'1rem'}}>₹4999</a> <button onClick="#" className='offerBtn'>70% OFF</button> ₹1599</p><br/>
                            <Link to='/thankyou'><Button color='primary'>PAY NOW</Button> <Button style={{ marginLeft:'3rem',backgroundColor:'#E0EBFF',color:'blue'}}>PAY LATER</Button></Link>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Payment;