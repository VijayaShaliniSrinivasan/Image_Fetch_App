import React,{useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Navbar.css'

const Imagefetch  = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res=>res.json())
        .then(result=>setData(result))

    },[])


    return (
        <Container  fluid>
            <Row>
                <div >
                    <h1 className='h12' >IMAGES OF COLORS</h1>
                </div>
                {
                    data.map(u => (
                        
                        <Col xl={3} lg={4} md={6} xs={12} >
                            <Card className='mt-3'>
                                <Card.Img variant="top" src={u.url} />
                                <Card.Body>
                                    <Card.Text>{u.id}</Card.Text>
                                    <Card.Title>{u.title}</Card.Title>
                                    <Card.Text>{u.thumbnailUrl}</Card.Text>
                                    <Button variant="primary">Add Colors To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Imagefetch