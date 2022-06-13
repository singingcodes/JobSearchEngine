import { Container, Row, Col, Spinner } from "react-bootstrap"
const Loading = () => {
  return (
    <Container className="my-2">
      <Row className="text-center">
        <Col>
          <Spinner animation="border" variant="success" />
        </Col>
      </Row>
    </Container>
  )
}

export default Loading
