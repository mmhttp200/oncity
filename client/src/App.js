import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateSession } from './features/session/sessionSlice';

const CreateNewAccount = React.lazy(()=>import('./Pages/CreateNewAccount'))
const Login = React.lazy(()=>import('./Pages/Login'))
const Dashboard = React.lazy(()=>import('./Pages/Dashboard'))
const CreateNewPage = React.lazy(()=>import('./Pages/CreateNewPage'))
const EditPage = React.lazy(()=>import('./Pages/EditPage'))
const EditAccount = React.lazy(()=>import('./Pages/EditAccount'))
const Logout = React.lazy(()=>import('./Pages/Logout'))
const Page = React.lazy(()=>import('./Pages/Page'))
const About = React.lazy(()=>import('./Pages/About'))
const Home = React.lazy(()=>import('./Pages/Home'))

function App() {

  const dispatch = useDispatch()
  const session = useSelector(state=>state.session)

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      const result = dispatch(fetchUser(sessionStorage.getItem('token')))
      result.then(data=>{
        if(!data.payload.success) sessionStorage.removeItem('token')
      })
      .catch(err=>{sessionStorage.removeItem('token')})
    }
  }, [session])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/create-new-account">
        <CreateNewAccount />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/about">
        <About />
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
