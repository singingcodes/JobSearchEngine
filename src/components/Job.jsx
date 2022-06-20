import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToFavoritesAction } from "../redux/actions"
import { AiFillStar } from "react-icons/ai"

// const mapStateToProps = (state) => ({
//   favorite: state.favorite.data,
// })

// const mapDispatchToProps = (dispatch) => ({
//   addToFavorites: (job) => dispatch(addToFavoritesAction(job)),
// })

const Job = (props) => {
  const dispatch = useDispatch()
  // const favorite = useSelector((state) => state.favorite.data)
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${props.data.company_name}`}>
          {props.data.company_name}
        </Link>
      </Col>
      <Col xs={6}>
        <a href={props.data.url} target="_blank" rel="noreferrer">
          {props.data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button
          color="primary"
          onClick={() => {
            dispatch(addToFavoritesAction(props.data))
          }}
        >
          <AiFillStar />
          Add To favorite
        </Button>
      </Col>
    </Row>
  )
}

export default Job
