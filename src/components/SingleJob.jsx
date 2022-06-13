import { Card, Col } from "react-bootstrap"
const SingleJob = (props) => {
  const { job } = props
  return (
    <Col sm={3} className="mb-2">
      <Card>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Category: {job.category}
          </Card.Subtitle>
          <Card.Text>Company: {job.company_name}</Card.Text>
          <Card.Text>
            candidate Location: {job.candidate_required_location}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleJob
