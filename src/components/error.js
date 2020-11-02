import React from 'react';
import './error.css';

const Error = props => {
    return(
        
            <div className='row'>
                <div className='col-sm-12'>
                <div className='row'>
                <div className='col-sm-12'>
                <img className='logo' src='logo.png' alt='logo' height='98px' width='151px'></img>
                </div>
                 </div>
                     <div className='row'>
                     <div className='col-sm-12 welcome' style={{margin:'3rem 0 2rem 33rem'}} >
                        <img  src='Team.png' />
                        <h1>Some error occured, please try again</h1>
                     </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col-sm-12'>
                        <h1>Welcome On Board ......</h1>
                        </div>
                    </div> */}
            </div>
            </div>
        
    );
}

export default Error;