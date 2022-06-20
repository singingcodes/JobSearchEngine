import { Container, Row, Col, Form } from "react-bootstrap"
import Job from "./Job"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { getJobSearchAction } from "../redux/actions"
import Loading from "./Loading"
import Error from "./Error"

// const mapStateToProps = (state) => ({
//   jobs: state.job.data,
//   isLoadingData: state.job.isLoading,
//   isErrorFetching: state.job.isError,
// })
// const mapDispatchToProps = (dispatch) => ({
//   getJobSearch: (props) => dispatch(getJobSearchAction(props)),
// })

const MainSearch = () => {
  // state = {
  //   query: "",
  // }
  const [query, setQuery] = useState("")

  const jobs = useSelector((state) => state.job.data)
  const isLoadingData = useSelector((state) => state.job.isLoading)
  const isErrorFetching = useSelector((state) => state.job.isError)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(getJobSearchAction(query))
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoadingData ? (
            <Loading />
          ) : isErrorFetching ? (
            <Error />
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
