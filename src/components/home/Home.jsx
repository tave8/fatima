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
      {
        url: "/img/pizzas/pizza4.jpg",
      },
      {
        url: "/img/pizzas/pizza4.jpg",
      },
      {
        url: "/img/pizzas/pizza4.jpg",
      },
      {
        url: "/img/pizzas/pizza4.jpg",
      },
      {
        url: "/img/pizzas/pizza4.jpg",
      },
      {
        url: "/img/pizzas/pizza4.jpg",
      },
    ],
  },
  //   {
  //     title: "Watch It Again",
  //     sliderId: "simple-slider2",
  //   },
  //   {
  //     title: "New Releases",
  //     sliderId: "simple-slider3",
  //   },
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
