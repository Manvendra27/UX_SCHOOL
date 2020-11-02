import React,{Component} from 'react';
import BasicInfo from './basicInfo';
import CourseSelect from './courseSelect'
import Payment from './payment'
import Thankyou from './thankYou'
import Error from './error'
import { Switch, Route , Redirect} from 'react-router-dom'

class Main extends Component {
    render() {
        return(

            <div>
                
                <Switch>
                    <Route exact path='/' component={() => <BasicInfo />} />
                    <Route exact path='/courseselect' component={() => <CourseSelect />} />
                    <Route exact path='/payment' component={() => <Payment/>} />
                    <Route exact path='/thankyou' component={() => <Thankyou />} />
                    <Route exact path='/error' component={() => <Error />} />
                    <Redirect to="/" />
                    </Switch>
                
              
            </div>
        )
    }
    
}
export default (Main)