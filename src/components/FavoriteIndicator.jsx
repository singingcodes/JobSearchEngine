import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button, Container, Row, Col } from "react-bootstrap"

// const mapStateToProps = (state) => ({
//   favoriteLength: state.favorite.data.length,
// })

const FavoriteIndicator = () => {
  const navigate = useNavigate()
  const favoriteLength = useSelector((state) => state.favorite.data.length)
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
export default FavoriteIndicator
