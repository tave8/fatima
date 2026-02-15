import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Image } from "react-bootstrap"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const MySlide = (props) => {
  const [image, setImage] = useState(props.image)
  const navigate = useNavigate()

  return (
    <>
      <Image
        src={image.url}
        fluid
        onClick={() => {
        //   const filmId = film.imdbID
          // go to details page for this movie
        //   navigate(`/movie-details/${filmId}`)
        }}
        style={{ minWidth: "300px", objectFit: "contain" }}
        // onError={handleImageError({})}
      />
    </>
  )
}

// gestisci caricamento non andato a buon fine
const handleImageError = (componentInfo) => {
  return (event) => {
    const img = event.target
    img.remove()
  }
}

export default MySlide
