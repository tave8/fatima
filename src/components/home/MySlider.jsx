import { Component } from "react"
import SimpleSlider from "../../assets/js/SimpleSlider"
import MySlide from "./MySlide"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert } from "react-bootstrap"

class MySlider extends Component {
  state = {
    images: this.props.images,
    // isLoading: true,
    // isError: false,
    simpleSlider: null,
  }

  componentDidMount() {
    this.state.simpleSlider = new SimpleSlider({
      targetSelector: `#${this.props.id}`,
      scrollBy: 400,
      givenCardsContainerHeight: 300,
    })
    // this.searchFilmsAndUpdateState()

    console.log(this.state.simpleSlider)
  }

  render() {
    return (
      <Container fluid className="mt-5">
        {/* title */}
        <Row>
          <Col>
            <h2>{this.props.title}</h2>
          </Col>
        </Row>

        {/* carousel/slider */}
        <Row className="simple-slider" id={this.props.id}>
          <div className="cards" style={{}}>
            {/* slides/carousel cards */}
            {this.state.images.map((imageInfo, i) => {
              return (
                <div key={i}>
                  <MySlide image={imageInfo} />
                </div>
              )
            })}
          </div>
        </Row>

        {/* loading or error */}
        {(this.state.isLoading || this.state.isError) && (
          <Row>
            {/* spinner: loading */}
            {this.state.isLoading && (
              <div className="text-center">
                <Spinner variant="danger" animation="border" />
              </div>
            )}

            {/* alert: error */}
            {this.state.isError && (
              <Alert variant="danger">
                <Alert.Heading>Problem while loading</Alert.Heading>
              </Alert>
            )}
          </Row>
        )}

      </Container>
    )
  }
}

export default MySlider
