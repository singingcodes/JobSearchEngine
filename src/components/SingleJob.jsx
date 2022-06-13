import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
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

          <Card.Text>Details</Card.Text>
          <Link to={"/" + job.company_name}>
            <Button>View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleJob
