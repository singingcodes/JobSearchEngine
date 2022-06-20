import Button from "react-bootstrap/Button"
import { FaTrash } from "react-icons/fa"
import { Container, Col, Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { removeFromFavoritesAction } from "../redux/actions"

// const mapStateToProps = (state) => ({
//   favorites: state.favorite.data,
// })

// const mapDispatchToProps = (dispatch) => ({
//   removeFavorite: (idToRemove) =>
//     dispatch(removeFromFavoritesAction(idToRemove)),
// })

const Favorites = () => {
  const favorites = useSelector((state) => state.favorite.data)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={6}>
          <h1>Favorites</h1>
          <ul className="list-group my-3">
            {favorites.map((job, i) => (
              <li className="list-group-item" key={i}>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromFavoritesAction(i))}
                  className="mx-2"
                >
                  <FaTrash />
                </Button>
                {job.title}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={6} className="font-weight-bold">
          Total Jobs In Favorites: {favorites.length}
        </Col>
      </Row>
    </Container>
  )
}

export default Favorites
