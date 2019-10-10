import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcon from "./NavbarIcon"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcon />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  width: 80vw;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
