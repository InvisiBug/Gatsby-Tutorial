import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"

const title = css`
  font-size: 60px;
  color: green;
`
const link = css`
  margin-right: 10px;
`

const Home = () => {
  return (
    <Layout>
      <h1 css={title}>Hello me</h1>
      <p>some text here</p>
    </Layout>
  )
}

export default Home
