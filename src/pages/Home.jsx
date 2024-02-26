// import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "../styles/home.css"

function Home() {
  return (
    <Container>
        <h1>Welcome to student registration</h1>
        <p>we are here to serve you</p>
        <Button variant="primary" type="submit">Get Started</Button>
    </Container>
    
  )
}

export default Home