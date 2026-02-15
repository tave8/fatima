import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Form, ListGroup } from "react-bootstrap"
import { Helmet } from "react-helmet"

import MySlider from "./MySlider"

const sliders = [
  {
    title: "Pizze",
    sliderId: "simple-slider1",
    images: [
      {
        url: "/img/pizzas/pizza1.jpg",
      },
      {
        url: "/img/pizzas/pizza2.jpg",
      },
      //   {
      //     url: "/img/pizzas/pizza3.jpg",
      //   },
      {
        url: "/img/pizzas/pizza4.jpg",
      },
    ],
  },
  {
    title: "Pane",
    sliderId: "simple-slider2",
    images: [
      {
        url: "/img/bread/bread1.jpg",
      },
      {
        url: "/img/bread/bread2.jpg",
      },
      {
        url: "/img/bread/bread3.jpg",
      },
      {
        url: "/img/bread/bread4.jpg",
      },
    ],
  },
  {
    title: "Dolci",
    sliderId: "simple-slider3",
    images: [
      {
        url: "/img/sweets/sweet1.jpg",
      },
    ],
  },
]

const Home = (props) => {
  return (
    <>
      {/* sliders */}
      {sliders.map((sliderInfo, i) => {
        return <MySlider key={i} title={sliderInfo.title} id={sliderInfo.sliderId} images={sliderInfo.images} />
      })}
    </>
  )
}

export default Home
