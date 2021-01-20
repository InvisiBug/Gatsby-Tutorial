import React from "react"

const Header = ({ children }) => {
  return (
    <>
      <h1
        style={{
          background: "lightBlue",
          textAlign: "center",
        }}
      >
        {children}
      </h1>
    </>
  )
}

export default Header
