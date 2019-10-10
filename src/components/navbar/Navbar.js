import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcon from "./NavbarIcon"

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavbarHeader />
        <NavbarLinks />
        <NavbarIcon />
      </nav>
    )
  }
}
