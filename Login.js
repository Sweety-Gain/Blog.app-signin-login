import { Col,Row, Container, Form, FormGroup, Card,Input,Button, CardHeader, CardBody, Label } from "reactstrap";

const Login = () => {
    return(

        <Container>
            <Row>
                <Col sm={{size:6,offset:3}}>
                <Card color="primary" inverse>

                <CardHeader>

                    <h3>Login Here!</h3>
                </CardHeader>
                <CardBody>

                <Form >
                    <FormGroup>
                        <Label for="email or username">Enter Email or Username</Label>
                            <Input 
                              type="email"
                              placeholder="Email or Username"
                              
                              id="email or username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Enter Password</Label>
                            <Input 
                              type="password"
                              placeholder="Enter Here"
                              id="password"
                        />
                    </FormGroup>
                    <Container className="text-center">
                          
                          <Button outline color="light">Login</Button>
                          <Button color="secondary" type="reset" className= "ms-2">Back</Button>

                        </Container>
                </Form>

                </CardBody>

                </Card>
                

                </Col>
            </Row>
        </Container>
        
    );
};
export default Login;