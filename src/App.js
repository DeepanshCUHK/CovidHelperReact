import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Navigation from './components/Navigation';


function App() {
   
  return (
    <Router>
      <div className="App">
        <Navigation/> 
        <Switch>
          <Route path = '/' exact component = {Page1}/>
          <Route path = '/page2' component = {Page2}/>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
