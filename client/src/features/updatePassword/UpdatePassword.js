import axios from "axios";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { fetchUser } from "../session/sessionSlice";

export default function UpdatePassword(props){

    const dispatch = useDispatch()
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState('')

    const validation = {
        password: {
            regex: /^[a-zA-Z0-9@_!-]{8,16}$/g,
            errMessage: 'Your password need have to between 8-16 characters, letters, numbers, and @_!- symbols.',
            errStatus: false,
            value: password
          }
    }
    
    const session = useSelector((state)=>state.session)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const result = await axios.put('/api/private/accounts/update-account-password', {
            newPassword: password
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
                setErrors(['password'])
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
        {success && <p className="border border-success">Your password was updated with success.</p>}
        
        <FormGroup>
          <Label for="password"><b>Password</b></Label>
          {errors.indexOf('password')>-1 && <p className="border border-danger">{validation.password.errMessage}</p>}
          <Input type="password" required name="password" id="password" placeholder="Your password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
        </FormGroup>
        
        
        <Button>Submit</Button>
      </Form>)
}