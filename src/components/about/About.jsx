import { Component } from "react"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Image } from "react-bootstrap"

const About = (props) => {
  return (
    <Container className="mt-3">
      <Row className="flex-column g-3">
        <Col className="text-center">
          <Image src="/img/me/face.jpg" fluid style={{ width: "200px" }} />
        </Col>
        <Col>
          <p>Mi chiamo Fatima Zaroual e mi piace fare pizze. Cosa mi contraddistingue? Sperimento molto e imparo dai migliori.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
