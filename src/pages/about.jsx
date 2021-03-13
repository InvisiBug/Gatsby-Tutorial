import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

const NewPage = () => {
  return (
    <Layout>
      <Header>{"This is a header"}</Header>
      <Header>{"This is another header"}</Header>
      <h1>Hello from new page</h1>
    </Layout>
  )
}

export default NewPage
