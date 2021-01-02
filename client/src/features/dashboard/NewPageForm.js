import axios from "axios";
import e from "express";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


export default function NewPageForm(props){

    

    const session = useSelector(state=>state.session)

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [errors, setErrors] = useState([])
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [uri,setURI] = useState('')
    const [keywords,setKeywords] = useState('')
    const [about,setAbout] = useState('')
    const [country,setCountry] = useState('')
    const [state,setState] = useState('')
    const [city,setCity] = useState('')

    const validation = {
        name: {
          regex: /^[A-zÀ-ú\s]{4,100}$/g,
          errMessage: 'Your name must have alphabet letters, and between 4-100 characters.',
          errStatus: false,
          value: name
        },
        uri: {
            regex: /^[A-zÀ-ú\s-]{4,100}$/g,
            errMessage: 'Your URI must have alphabet letters, and between 4-100 characters.',
            errStatus: false,
            value: uri
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

        const formatedURI = uri.split(' ').join('-')
        

        const newPageResult = await axios.post('/api/private/pages/create-new-page',{
            category_id: category,
            uri: formatedURI,
            status: 1,
            name,
            keywords,
            city,
            about
        }, {
            headers: {
                'Content-Type': 'application/json',
                'token': session.token
            }
        })
        .then(data=>{
            if(data.data.success){
              setURI(formatedURI)
              setSuccess(true)
            }
            setErrorMessage(data.data.message)
        })
        .catch(err=>console.log(err))

    }
    
    if(success){
        return (
            <div className="border border-success">Your page was created. <Link to={`/page/${uri}`}>Click here</Link> to open the page in new tab.</div>
        )
    }else{
        return (
            <Form method="POST" onSubmit={handleSubmit}>
            {errorMessage.length>0 && <p className="border border-danger">{errorMessage}</p>}
            <FormGroup>
              <Label for="name"><b>Name</b></Label>
              {errors.indexOf('name')>-1 && <p className="errMessage border border-danger">{validation.name.errMessage}</p>}
              <Input type="text" required name="name" id="name" placeholder="The page's name" value={name} onChange={(e)=>setName(e.target.value)}  />
            </FormGroup>
            <FormGroup>
              <Label for="uri"><b>Friendly url</b></Label>
              {errors.indexOf('uri')>-1 && <p className="errMessage border border-danger">{validation.uri.errMessage}</p>}
              <Input type="text" required name="uri" id="uri" placeholder="The page's friendly url" value={uri} onChange={(e)=>setURI(e.target.value)}  />
            </FormGroup>
            <FormGroup>
              <Label for="keywords"><b>Keywords</b></Label>
              <Input type="text" required name="keywords" id="keywords" placeholder="The page's keywords, separate using space" value={keywords} onChange={(e)=>setKeywords(e.target.value)}  />
            </FormGroup>
            <FormGroup>
              <Label for="category"><b>Category</b></Label>
              <Input type="select" required name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} >
                <option hidden>Choose page's category</option>
                <option key="restaurant" value="5fe8f3a9869965edd6928526">Restaurant</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="country"><b>Country</b></Label>
              <Input type="select" required name="country" id="country" value={country} onChange={(e)=>setCountry(e.target.value)} >
                <option hidden>Choose page's country</option>
                <option key="brazil">Brazil</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="state"><b>State</b></Label>
              <Input type="select" required name="state" id="state" value={state} onChange={(e)=>setState(e.target.value)} >
                <option hidden>Choose page's state</option>
                <option key="sao-paulo">Sao Paulo</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="city"><b>City</b></Label>
              <Input type="select" required name="city" id="city" value={city} onChange={(e)=>setCity(e.target.value)} >
                <option hidden>Choose page's city</option>
                <option key="sao-paulo" value="5fe607bdc925c4a01d516126">Sao Paulo</option>
              </Input>
            </FormGroup>
            
            <FormGroup>
            <Label for="about">About</Label>
            <Input type="textarea" name="about" id="about" value={about} onChange={(e)=>setAbout(e.target.value)} />
          </FormGroup>
            <Button>Submit</Button>
          </Form>
        )
    }

    
}