import React from 'react'
import {Table, Button} from 'react-bootstrap'
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom"

function ContactPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4" >
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Contact Us</th>
                            </tr>

                            <tr>
                                <th>
                                    <h3 className="col-md-12 mt-4">Passakorn Yongbantom</h3>
                                    <p className="col-md-12 mt-4 font-weight-normal">you can call me "Cappuccino" not for short. Nice to meet you !</p>
                                    <p className="col-md-12 mt-4 align-middle font-weight-normal">   • 4th year multimedia student of TNI </p>
                                    <p className="col-md-12 mt-1 align-middle font-weight-normal">   • Dream carreer's Voice actor </p>
                                    <p className="col-md-12 mt-4 font-weight-normal">For my github visit link below.</p>

                                    <a href='https://github.com/PassakornYongbantom'><Button className="ml-12 mt-4 mb-4" variant="outline-secondary"> <BsGithub/> Click Here</Button></a>

                                    <p className="col-md-12 mt-4" class="font-weight-normal"><b>Contact me</b> : yo.passakorn_st@tni.ac.th</p>

                                </th>
                            </tr>

                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
