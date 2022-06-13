import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

const Details = () => {
  const params = useParams().details
  const [job, setJob] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(params)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${params}`
      )
      if (response.ok) {
        const responseData = await response.json()
        const job = responseData.data
        console.log(job)
        setJob(job)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log("error")
    }
  }
  console.log("JOB", job)
  return job.map((job) => (
    <Container>
      <Row>
        <Col className="mb-3">
          <div>
            <h1>{job.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  ))
}

export default Details
