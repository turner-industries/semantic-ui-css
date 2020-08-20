import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Dropdown, Button } from "semantic-ui-react";
import styled from "@emotion/styled";
import logo from "../resources/semantic-ui-logo.png";
import { ThemeContext } from "../ThemeContext";

const AppHeaderRoot = styled.div`
  .ui.menu {
    border: 0px solid transparent;
    border-radius: 0;
    flex: 1;
    border-bottom: 4px solid #00563f;

    .item {
      padding: 0.6em 1em;

      &.logo-container {
        font-size: 1.5rem;
        font-weight: bold;
      }

      .logo {
        height: 32px;
        margin-right: 15px;
        width: 32px;
      }

      .button {
        font-size: 0.8em;
      }
    }
  }
`;

const AppHeader = () => {
  const { useInvertedStyle, toggleInvertedStyle } = useContext(ThemeContext);

  return (
    <AppHeaderRoot>
      <Menu inverted={useInvertedStyle}>
        <Menu.Item as={Link} className="logo-container" to="/">
          <Image className="logo" src={logo} title="Showcase" />
          Showcase
        </Menu.Item>
        <Dropdown item text="Concepts">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/forms">
              Forms
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/tables">
              Tables
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/items">
              Management Screen
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button onClick={toggleInvertedStyle}>
              Toggle Inverted Styles
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </AppHeaderRoot>
  );
};

export default AppHeader;
