import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner, CardDeck, Card } from "react-bootstrap"

function DetailPage() {

    const { id, title } = useParams()

    const [detail, setDetail] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const getData = async (id) => {
        try {

            setLoading(true) //เริ่มหมุนตรงนี้
            const resp = await axios.get('https://api.codingthailand.com/api/course/1')
            // console.log(resp.data)
            setDetail(resp.data.data)

        } catch (error) {

            // console.log(error.response)
            setError(error)

        }
        finally {
            setLoading(false) //หยุดตรงนี้ทุกกรณี
        }
    }

    React.useEffect(() => {

        getData(id)

    }, [])

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


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4" >
                    <h2>Detail Page</h2>
                    <p>{title} ({id})</p>

                    <div className='row'>
                        <CardDeck>

                            {
                                detail.length > 0 ? (

                                    detail.map((d, index) => {
                                        return (
                                            <div className='col-md-4' key={d.ch_id}>
                                                <Card className='mb-4 shadow-sm'>
                                                    <Card.Body>
                                                        <Card.Title>{d.ch_title}</Card.Title>
                                                        <Card.Text>
                                                            
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        {d.ch_dateadd}
                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        )
                                    })

                                ) : (

                                    <h1>NO Data</h1>

                                )
                            }

                        </CardDeck>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailPage
