import React , { Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth'
import FetchData from './components/FetchData'
import ShowTable from './components/ShowTable'

import './App.css';

class App extends Component {
  render (){ 
    return(
      <div>
        <Switch>
          <Route path="/fetchdata" component={FetchData} />
          <Route path="/showtable" exact component={ShowTable} />
          <Route path="/" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
    
}
}

export default App;
