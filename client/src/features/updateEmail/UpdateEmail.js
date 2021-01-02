import axios from "axios";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { fetchUser } from "../session/sessionSlice";

export default function UpdateEmail(props){

    const dispatch = useDispatch()
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState([])
    const [email, setEmail] = useState('')

    const validation = {
        email: {
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
            errMessage: 'Your email need have to the format email@email.com',
            errStatus: false,
            value: email
          }
    }
    
    const session = useSelector((state)=>state.session)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const result = await axios.put('/api/private/accounts/update-account-email', {
            newEmail: email
        }, {
            headers: {
                'Content-Type': 'application/json',
                'token': session.token
            }
        })
        .then((data)=>{
            if(data.data.success) {
                dispatch(fetchUser(session.token))
                setSuccess(true)
                return
            }else{
                setSuccess(false)
                setErrors(['email'])
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
        {success && <p className="border border-success">Your email was updated with success.</p>}
        
        <FormGroup>
          <Label for="email"><b>Email</b></Label>
          {errors.indexOf('email')>-1 && <p className="border border-danger">{validation.email.errMessage}</p>}
          <Input type="email" required name="email" id="email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </FormGroup>
        
        
        <Button>Submit</Button>
      </Form>)
}