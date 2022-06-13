import { Card, Col, Button } from "react-bootstrap"
const SingleJob = (props) => {
  const { job } = props
  return (
    <Col sm={3} className="mb-2">
      <Card>
        <Card.Body>
          {/* concatenate title with ellipses  */}
          <Card.Title>
            {job.title.length > 20
              ? job.title.substring(0, 20) + "..."
              : job.title}
          </Card.Title>

          <Card.Text>Company: {job.company_name}</Card.Text>
          <Card.Text>
            {job.candidate_required_location && "Location: "}
            {job.candidate_required_location}
          </Card.Text>

          <Button variant="link">
            <a href={job.url}>Apply Now</a>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleJob
