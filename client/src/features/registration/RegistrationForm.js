import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function RegistrationForm(props){

  const [success, setSuccess] = useState(false)
  const [mainErrMessage, setMainErrMessage] = useState('')
  const [errors, setErrors] = useState([])
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cellphone,setCellphone] = useState('')
  const [officialDocument,setOfficialDocument] = useState('')
  const [zipcode,setZipcode] = useState('')
  const [country,setCountry] = useState('')
  const [state,setState] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [gender,setGender] = useState('')
  const [termsOfUse,setTermsOfUse] = useState(false)

  const validation = {
    fullname: {
      regex: /^[A-zÀ-ú\s]{4,100}$/g,
      errMessage: 'Your name must have alphabet letters, and between 4-100 characters.',
      errStatus: false,
      value: fullname
    },
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
    },
    officialDocument: {
      regex: /^[0-9]{11}$/g,
      errMessage: 'Your official document need have to only numbers, and the format need to be like as CPF (brazilian document).',
      errStatus: false,
      value: officialDocument
    },
    zipcode: {
      regex: /^\d{8}$/g,
      errMessage: 'Your zipcode need to be brazilian format, with only 8 numbers.',
      errStatus: false,
      value: zipcode
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

    const response = await axios.post('/api/public/accounts/create-new-account',
    {
      sessionStatus: 0,
      sessionIP: 0,
      accountStatus: 0,
      email,
      password,
      cellphone,
      fullname,
      gender,
      officialDocument,
      city,
      address,
      zipcode
    },{
      'Content-Type': 'application/json'
    }).then(result=>{
      console.log(result)
      if(result.data.success){
        setSuccess(true)
      }else{
        setSuccess(false)
        setMainErrMessage(result.data.message)
      }
    }).catch(err=>console.log(err))

  }

  if(success){
    return (
      <div className="border border-success">Your account was created with success.</div>
    )
    
  } else{
    return (
      <Form method="POST" onSubmit={handleSubmit}>
        {mainErrMessage.length>0 && <p className="errMessage border border-danger">{mainErrMessage}</p>}
        <FormGroup>
          <Label for="fullname"><b>Fullname</b></Label>
          {errors.indexOf('fullname')>-1 && <p className="errMessage border border-danger">{validation.fullname.errMessage}</p>}
          <Input type="text" required name="fullname" id="fullname" placeholder="Your fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}  />
        </FormGroup>
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
        <FormGroup>
          <Label for="cellphone"><b>Cellphone</b></Label>
          <Input type="number" required name="cellphone" id="cellphone" placeholder="Your cellphone" value={cellphone} onChange={(e)=>setCellphone(e.target.value)}  />
        </FormGroup>
        <FormGroup>
          <Label for="officialDocument"><b>Official document (brazilian CPF)</b></Label>
          {errors.indexOf('officialDocument')>-1 && <p className="errMessage border border-danger">{validation.officialDocument.errMessage}</p>}
          <Input type="number" required name="officialDocument" id="officialDocument" placeholder="Your official document" value={officialDocument} onChange={(e)=>setOfficialDocument(e.target.value)}  />
        </FormGroup>
        <FormGroup>
          <Label for="zipcode"><b>Your zipcode</b></Label>
          {errors.indexOf('zipcode')>-1 && <p className="errMessage border border-danger">{validation.zipcode.errMessage}</p>}
          <Input type="number" required name="zipcode" id="zipcode" placeholder="Your zipcode" value={zipcode} onChange={(e)=>setZipcode(e.target.value)}  />
        </FormGroup>
        <FormGroup>
          <Label for="country"><b>Country</b></Label>
          <Input type="select" required name="country" id="country" value={country} onChange={(e)=>setCountry(e.target.value)} >
            <option hidden>Choose your country</option>
            <option key="brazil">Brazil</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="state"><b>State</b></Label>
          <Input type="select" required name="state" id="state" value={state} onChange={(e)=>setState(e.target.value)} >
            <option hidden>Choose your state</option>
            <option key="sao-paulo">Sao Paulo</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="city"><b>City</b></Label>
          <Input type="select" required name="city" id="city" value={city} onChange={(e)=>setCity(e.target.value)} >
            <option hidden>Choose your city</option>
            <option key="sao-paulo" value="5fe607bdc925c4a01d516126">Sao Paulo</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="address"><b>Address</b></Label>
          <Input type="textarea" required name="address" id="address" value={address} onChange={(e)=>setAddress(e.target.value)}  />
        </FormGroup>
        
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" value="M" onClick={(e)=>setGender('M')} />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" value="F" onClick={(e)=>setGender('F')} />{' '}
              Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" value="O" onClick={(e)=>setGender('O')} />{' '}
              Other
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" required name="termosOfUse" value={termsOfUse} onChange={(e)=>setGender(!termsOfUse)}  />{' '}
            I accepth the terms of use.
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}