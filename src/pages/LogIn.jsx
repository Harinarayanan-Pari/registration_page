// import React from 'react'
import { Button, Container,Form } from 'react-bootstrap'
import "../styles/login.css"
import { useState } from 'react'

function LogIn() {
    const [loginData,setLoginData] = useState({
        email : "",
        password:""
    })

    const handlechange = (e)=>{
        const {name, value} = e.target;
        setLoginData({...loginData,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(loginData)
    }

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Form.Group>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control type='email' name='email'  required value={loginData.email} onChange={handlechange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type='password' name='password' value={loginData.password} onChange={handlechange} required/>
            </Form.Group>
            <Button variant='primary' type='submit'>LogIn</Button>
        </Form>
    </Container>
  )
}

export default LogIn