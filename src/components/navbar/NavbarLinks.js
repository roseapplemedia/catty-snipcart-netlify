import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 2,
        path: "/about/",
        name: "about",
      },
      {
        id: 0,
        path: "/shop/",
        name: "shop",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: grey;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: grey;
      color: white;
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: white;
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
