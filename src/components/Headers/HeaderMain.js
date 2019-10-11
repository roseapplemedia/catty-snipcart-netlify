import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavBar from "../navbar/Navbar"
import HeaderLogo from "../../images/alittlecattywampus.png"

const HeaderMainStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: linen;
  /* padding-top: 20px; */
`

const ShopName = styled.img`
  display: flex;
  background-image: url(${HeaderLogo});
  width: 750px;
  height: 250px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    display: none;
  }
`

const LinkStyled = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const headerMain = props => {
  return (
    <HeaderMainStyled>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <ShopName></ShopName>
      </div>
    </HeaderMainStyled>
  )
}

export default headerMain
