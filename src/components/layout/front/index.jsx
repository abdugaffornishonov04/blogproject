import { Fragment } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const FrontLayout = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default FrontLayout