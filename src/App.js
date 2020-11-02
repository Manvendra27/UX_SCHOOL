import React, {Component} from 'react';
import './App.css';
// import basicINfo from './components/basicInfo';
import Main from './components/maincomponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render () {
    return(
      <BrowserRouter>
      <div>
      <Main />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
