import React from 'react'
import { Table, Spinner } from "react-bootstrap"
import axios from 'axios'
import Pagination from "react-js-pagination"

const HospitalPage = () => {

    const pagesize = 10


    const [hospital, setHospital] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const [page, setPage] = React.useState(1)
    const [total, setTotal] = React.useState(0)

    const getData = async () => {
        try {

            setLoading(true) //เริ่มหมุนตรงนี้
            const resp = await axios.get(`https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pagesize}`)
            // console.log(resp.data)
            setHospital(resp.data.data)
            setTotal(resp.data.meta.pagination.total)

        } catch (error) {

            // console.log(error.response)
            setError(error)

        }
        finally {
            setLoading(false) //หยุดตรงนี้ทุกกรณี
        }
    }

    React.useEffect(() => {
        getData(page)
    }, [page])

    if (loading === true) {

        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
            </div>
        )

    }

    if (error) {
        return (
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, pleas try again</h4>
                <p>{error.response.data.massage}</p>
            </div>
        )
    }

    const handlePageChange = (pageNumber) =>{

        setPage(pageNumber)

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
                                <th>Code</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                hospital.map((h, index) => {
                                    return (
                                        <tr key={h.id}>
                                            <td>{h.id}</td>
                                            <td>{h.code}</td>
                                            <td>{h.h_name}</td>
                                        </tr>

                                    )
                                })
                            }

                            {

                            }

                        </tbody>
                    </Table>

                    <Pagination
                        activePage={page}
                        itemsCountPerPage={pagesize}
                        totalItemsCount={total}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                        prevPageText="prev"
                        nextPageText="next"
                    />

                </div>
            </div>
        </div>
    )
}

export default HospitalPage
