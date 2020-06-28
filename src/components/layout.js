
import React from "react"
import "./layout.css"
import "../css/bootstrap.min.css"
import Navbar from "./navbar"
const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
 }

export default Layout
