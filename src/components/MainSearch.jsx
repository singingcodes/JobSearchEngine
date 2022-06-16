import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import Job from "./Job"
import { connect } from "react-redux"
import { getJobSearchAction } from "../redux/actions"

const mapStateToProps = (state) => ({
  jobs: state.job.data,
  isLoadingData: state.job.isLoading,
  isErrorFetching: state.job.isError,
})
const mapDispatchToProps = (dispatch) => ({
  getJobSearch: (props) => dispatch(getJobSearchAction(props)),
})

class MainSearch extends Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    this.props.getJobSearch(this.state.query)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="type and press Enter"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.props.jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)
