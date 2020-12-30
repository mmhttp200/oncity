import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/register">
        Register
      </Route>
      <Route exact path="/login">
        Login
      </Route>
      <Route exact path="/register/new">
        new
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
