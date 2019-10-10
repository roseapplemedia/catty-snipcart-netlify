import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import NavBar from "../navbar/Navbar"

const HeaderMainStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: linen;
  /* padding-top: 20px; */
`

const ShopName = styled.h1`
  background: ${props => props.theme.colors.main};
  padding: 20px;
  width: 100vw;
  color: white;
  text-align: center;
  font-family: Heebo, sans-serif;
  /* border: 4px solid ${props => props.theme.colors.secondaryAccent}; */
  font-size: 2.5em;
  font-weight: 900;
  @media (max-width: 600px) {
    width: 100vw;
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
      <NavBar></NavBar>
      <ShopName>
        <LinkStyled to="/">{props.shopName}</LinkStyled>
      </ShopName>
    </HeaderMainStyled>
  )
}

export default headerMain
