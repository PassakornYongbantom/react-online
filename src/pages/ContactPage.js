import React from 'react'
import {Table} from 'react-bootstrap'

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
                                    <h2 className="col-md-12 mt-4">Passakorn Yongbantom</h2>
                                    <div className="col-md-12 mt-4">you can call me "Cappuccino" not for short. Nice to meet you !</div>
                                    <div className="col-md-12 mt-4">   • 4th year multimedia student of TNI </div>
                                    <div className="col-md-12 mt-2">   • Dream carreer's Voice actor </div>
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
