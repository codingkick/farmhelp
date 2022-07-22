import { signOut,getAuth } from 'firebase/auth';
import React from 'react'
import {Container,Row,Col,Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();
    function signOutFunc(){
        console.log("outtt")
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#" onClick={()=>history.push("/farmerListing")}>Farmit</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#" onClick={()=>history.push("consumerListing")}>Demands</Nav.Link>
                <Nav.Link href="#" onClick={()=>history.push("profile")}>Profile</Nav.Link>
                <Nav.Link href="#" onClick={signOutFunc}>Signout</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
