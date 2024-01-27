import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Row,Col, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Signin = () => {

        const [data,setData]=useState({
           name:'',
           email:'',
           username:'',
           password:'',
           
        })

        // submitting the form

      const submitForm=(event)=>{
        event.preventDefault()
        console.log(data);
      }

        const [error,setError]=useState({
         errors:{},
         isError:false
        })

        useEffect(() =>{
          console.log(data);
        },[data])
        

        const handleChange=(event,property)=>{
          setData({...data,[property]:event.target.value})
        }


  return(
  <container>
        <Row>
         <Col sm={{size:6, offset:3}}>
         
            <Card color="dark" inverse >
                <CardHeader>
                    <h3>Fill Information To Sign-In!</h3>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={submitForm} >

                      {/* Name field */}

                        <FormGroup>
                            <Label for="name">Enter Name</Label>
                            <Input 
                              type="text"
                              placeholder="Enter Your Name Here"
                              id="name"
                               onChange={(e)=>handleChange(e ,'name')}
                               
                            />
                        </FormGroup>
                         
                          {/*email field */}

                        <FormGroup>
                            <Label for="email">Enter Email</Label>
                            <Input 
                              type="email"
                              placeholder="Enter Your Email Here"
                               id="email"
                               onChange={(e)=>handleChange(e ,'email')}
                              
                            />
                             <FormGroup>
                            <Label for="username">Enter Username</Label>
                            <Input 
                              type="text"
                              placeholder="Enter Here"
                              id="username"
                              onChange={(e)=>handleChange(e ,'username')}
                              
                            />
                        </FormGroup>
                         
                        </FormGroup>
                        {/*  password field */}
                        <FormGroup>
                            <Label for="password">Enter Password</Label>
                            <Input 
                              type="password"
                              placeholder="Enter Here"
                               id="password"
                               onChange={(e)=>handleChange(e ,'password')}
                               
                            />
                        </FormGroup>
                        <Container className="text-center">
                          
                          <Button outline color="light">Sign-In</Button>
                          <Button color="secondary" type="reset" className= "ms-2">Back</Button>

                        </Container>
                    </Form>
                </CardBody>
            </Card>
        
         </Col>

        </Row>


   </container>
    );
};
export default Signin;