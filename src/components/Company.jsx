import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap"
import { useState } from "react"
import Loading from "./Loading"
import Error from "./Error"
import SingleJob from "./SingleJob"
const Company = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState("")
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${search}&limit=10`
      )
      if (response.ok) {
        const responseData = await response.json()
        const jobs = responseData.data
        console.log(jobs)
        setData(jobs)
        setIsLoading(false)
        setError(false)
      } else {
        setError(true)
        setIsLoading(true)
      }
    } catch (error) {
      setError(true)
      setIsLoading(true)
    }
  }
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1>Welcome to the Home Page</h1>
          <Form inline>
            {/* get result from search input */}
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={fetchData}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {isLoading && <Loading />}
        {error && <Error />}
        {data.map((job) => (
          <SingleJob job={job} />
        ))}
      </Row>
    </Container>
  )
}
export default Company
