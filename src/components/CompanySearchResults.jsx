import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getJobsAction } from "../redux/actions"
import Loading from "./Loading"
import Error from "./Error"

const mapStateToProps = (state) => ({
  jobs: state.job.data,
  isLoadingData: state.job.isLoading,
  isErrorFetching: state.job.isError,
})
const mapDispatchToProps = (dispatch) => ({
  getJobs: (props) => dispatch(getJobsAction(props)),
})

const CompanySearchResults = (props) => {
  // const [jobs, setJobs] = useState([])
  const params = useParams()

  useEffect(() => {
    props.getJobs(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const baseEndpoint = ""

  // const getJobs = async () => {
  //   const response = await fetch(baseEndpoint + params.companyName)
  //   const { data } = await response.json()
  //   setJobs(data)
  // }

  return (
    <Container>
      <Row>
        <Col>
          {props.isLoadingData ? (
            <Loading />
          ) : props.isErrorFetching ? (
            <Error />
          ) : (
            props.jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanySearchResults)
