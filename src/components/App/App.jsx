import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import indexRoutes from '../../Routes/indexRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {indexRoutes.map((el, key)=>(
            <Route path={el.path} component={el.component} key={key} exact />
          ))}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
