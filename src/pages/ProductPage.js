import React from 'react'
import { Table , Image , Badge , Spinner, Button } from "react-bootstrap"
import {BsArrowRightSquareFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import axios from 'axios'

function ProductPage() {

    const [product,setProduct] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const getData = async() => {
        try{

            setLoading(true) //เริ่มหมุนตรงนี้
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            // console.log(resp.data)
            setProduct(resp.data.data)

        } catch(error){

            // console.log(error.response)
            setError(error)

        } 
        finally {
            setLoading(false) //หยุดตรงนี้ทุกกรณี
        }
    }

    React.useEffect(() => {
        getData()
    },[])

    if (loading === true){

    return(
        <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        </div>
    )

    }

    if (error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, pleas try again</h4>
                <p>{error.response.data.massage}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4" >
                    <h2>Product Page</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Detail</th>
                                <th>Created Date</th>
                                <th>View</th>
                                <th>Picture</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                product.map((p,index) => {
                                    return(
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.title}</td>
                                            <td>{p.detail}</td>
                                            <td>{p.date}</td>
                                            <td><Badge variant="success">{p.view}</Badge></td>
                                            {/* <td>{p.picture}</td> */}
                                            <td><Image src={p.picture} rounded width="60" /></td>
                                            <td><Link to="/detail"><Button variant="outline-primary" to = "/detail">Click <BsArrowRightSquareFill/> </Button></Link></td>
                                        </tr>
                                        
                                    )
                                })
                            }
                            
                            {
                                
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
