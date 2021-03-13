import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.div`
  background: #d1d0ce;
  margin: 3rem auto;
  max-width: 75%;
  padding: 0 1rem;
`

const Nav = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const Header = styled.header`
  margin-bottom: 1.5rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-shadow: none;
  background-image: none;
`

const ListLink = ({ children, to }) => {
  return (
    <Nav>
      <Link to={to}>{children}</Link>
    </Nav>
  )
}

const H1 = styled.h1`
  display: inline;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <StyledLink to="/">
          <H1>Kavanet.io</H1>
        </StyledLink>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </Header>
      {children}
    </Container>
  )
}

export default Layout
