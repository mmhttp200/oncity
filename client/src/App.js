import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Suspense } from 'react'
import './App.css';

const Register = React.lazy(()=>import('./Pages/Register'))
const Login = React.lazy(()=>import('./Pages/Login'))
const Dashboard = React.lazy(()=>import('./Pages/Dashboard'))
const CreateNewPage = React.lazy(()=>import('./Pages/CreateNewPage'))
const EditPage = React.lazy(()=>import('./Pages/EditPage'))
const EditAccount = React.lazy(()=>import('./Pages/EditAccount'))
const Logout = React.lazy(()=>import('./Pages/Logout'))
const Page = React.lazy(()=>import('./Pages/Page'))
const Home = React.lazy(()=>import('./Pages/Home'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/create-new-page">
        <CreateNewPage />
      </Route>
      <Route exact path="/edit-page">
        <EditPage />
      </Route>
      <Route exact path="/edit-account">
        <EditAccount />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route path="/page/:uri" component={Page} />
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
