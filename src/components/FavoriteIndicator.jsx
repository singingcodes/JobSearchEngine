import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { Button, Container, Row, Col } from "react-bootstrap"

const mapStateToProps = (state) => ({
  favoriteLength: state.favorite.data.length,
})

const FavoriteIndicator = ({ favoriteLength }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Row className="float-right my-3">
        <Col>
          <Button
            color="primary"
            onClick={() => {
              navigate("/favorites")
            }}
          >
            {` ${favoriteLength} favorites`}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
export default connect(mapStateToProps)(FavoriteIndicator)
