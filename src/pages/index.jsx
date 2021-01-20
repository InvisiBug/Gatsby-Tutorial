import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ color: "green", fontSize: "50px" }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello me</h1>
      <p>some text here</p>
    </div>
  )
}

export default Home
