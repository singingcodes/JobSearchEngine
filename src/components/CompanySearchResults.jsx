import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getJobsAction } from "../redux/actions"
import Loading from "./Loading"
import Error from "./Error"

// const mapStateToProps = (state) => ({
//   jobs: state.job.data,
//   isLoadingData: state.job.isLoading,
//   isErrorFetching: state.job.isError,
// })
// const mapDispatchToProps = (dispatch) => ({
//   getJobs: (props) => dispatch(getJobsAction(props)),
// })

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])
  const params = useParams()

  const jobs = useSelector((state) => state.job.data)
  const isLoadingData = useSelector((state) => state.job.isLoading)
  const isErrorFetching = useSelector((state) => state.job.isError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobsAction(params.companyName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row className="mt-4">
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

export default CompanySearchResults
