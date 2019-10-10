import React, { Component } from "react"
import styled from "styled-components"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class NavbarIcon extends Component {
  state = {
    icon: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icon.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-weight: 1.3rem;
    cursor: pointer;
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .icon:hover {
    color: grey;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-between;
  }
`
