import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {fetchUser} from '../session/sessionSlice'

export default function RegistrationForm(props){

  const dispatch = useDispatch()

  const [success, setSuccess] = useState(false)
  const [mainErrMessage, setMainErrMessage] = useState('')
  const [errors, setErrors] = useState([])
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const validation = {
    email: {
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
      errMessage: 'Your email need have to the format email@email.com',
      errStatus: false,
      value: email
    },
    password: {
      regex: /^[a-zA-Z0-9@_!-]{8,16}$/g,
      errMessage: 'Your password need have to between 8-16 characters, letters, numbers, and @_!- symbols.',
      errStatus: false,
      value: password
    }
  }

  const handleSubmit = async (e)=>{

    e.preventDefault()

    const elements = Object.keys(validation)
    const result = elements.filter(element=>{
      const regex = validation[element].regex
      return regex.test(validation[element].value) === false
    })
    
    setErrors(result)

    if(errors.length) return;

    const response = await axios.post('/api/public/accounts/login',
    {
      sessionIP: 0,
      email,
      password
    },{
      'Content-Type': 'application/json'
    }).then(result=>{

      if(result.data.success){

        dispatch(fetchUser(result.data.data.token))
        sessionStorage.setItem('token', result.data.data.token)
        setSuccess(true)
        
      }else{
        setSuccess(false)
        setMainErrMessage(result.data.message)
      }
    }).catch(err=>{
      setSuccess(false)
    })

  }

  if(success){
    return (
      <div className="border border-success">Your account was logged with success. <Link to="/dashboard">Click here</Link> to access the dashboard.</div>
    )
    
  } else{
    return (
      <Form method="POST" onSubmit={handleSubmit}>
        {mainErrMessage.length>0 && <p className="errMessage border border-danger">{mainErrMessage}</p>}
        
        <FormGroup>
          <Label for="email"><b>Email</b></Label>
          {errors.indexOf('email')>-1 && <p className="errMessage border border-danger">{validation.email.errMessage}</p>}
          <Input type="email" required name="email" id="email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </FormGroup>
        <FormGroup>
          <Label for="password"><b>Password</b></Label>
          {errors.indexOf('password')>-1 && <p className="errMessage border border-danger">{validation.password.errMessage}</p>}
          <Input type="password" required name="password" id="password" placeholder="Your password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}