import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue} from "firebase/database";
import { useState,useEffect } from 'react';
import { Header } from './Header';

import app from '../firebase';
export const FarmerListing = () => {
    const [requests, setrequests] = useState([{a:1}])

    const mystate = useSelector((state)=>state.userReducer)
    useEffect(() => {
        console.log("hola",mystate.name)
        const db = getDatabase();
        const temp = ref(db,'farmerListing');
        onValue(temp,(snapshot)=>{
            const data = snapshot.val();
            // console.log(data)
            setrequests(data);
        },{
            onlyOnce : true
        }) 

    }, [])

    const styling = {
        overflow:"hidden"
    }

    const styling2 = {
        height:250
    }

        if(requests.length === 0)
        {
            return(<>Nothing here!!</>)
        }
        else
        {
            return(
                <div>
                    <Header></Header>
                    <Container>
                        <Row>
                            {
                                Object.keys(requests).map((e,ind)=>{
                                    console.log(requests[e].productName)
                                    return(
                                        <Col xs={12} md={4} style={styling}>
                                            <br/>
                                            <br/>
                                            <Card>
                                                {/* <Card.Img variant="bottom" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" style={{heigth:"2rem"}}/> */}
                                                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" style={styling2}></img> */}
                                                <Card.Body>
                                                <Card.Title>{requests[e].productName}</Card.Title>
                                                <Card.Text>
                                                    <b>[Farmer Name]</b> : Kisaan<br/>
                                                    <b>[Farmer Rating]</b> : 10<br/>
                                                    <b>[Time of Entry]</b> : null<br/>

                                                </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                <small className="text-muted">{requests[e].timeOfEntry}</small>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
            )
        }
}
