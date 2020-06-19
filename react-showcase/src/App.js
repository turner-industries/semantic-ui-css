import React, { useState } from "react";
import { Route, Redirect, Switch, Link, useLocation } from "react-router-dom";
import {
  Menu,
  Image,
  Dropdown,
  Header,
  Button,
  Segment,
  Grid,
} from "semantic-ui-react";
import styled from "@emotion/styled";
import logo from "./resources/semantic-ui-logo.png";

const paths = {
  forms: "/forms",
  tables: "/tables",
  showcase: "/showcase",
};

const AppHeaderRoot = styled.div`
  .ui.menu {
    border-radius: 0;
    flex: 1;

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
    }
  }
`;

const MenuExample = ({ inverted }) => {
  const [active, setActive] = useState();

  return (
    <AppHeaderRoot>
      <Menu inverted={inverted}>
        <Menu.Item
          className="logo-container"
          onClick={() => setActive(undefined)}
        >
          <Image className="logo" src={logo} title="Showcase" />
          Showcase
        </Menu.Item>
        <Dropdown item text="Concepts">
          <Dropdown.Menu>
            <Dropdown.Item
              active={active === "forms"}
              onClick={() => setActive("forms")}
            >
              Forms
            </Dropdown.Item>
            <Dropdown.Item
              active={active === "tables"}
              onClick={() => setActive("tables")}
            >
              Tables
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Continuations">
          <Dropdown.Menu>
            <Dropdown.Item
              active={active === "subsequent"}
              onClick={() => setActive("subsequent")}
            >
              Subsequent
            </Dropdown.Item>
            <Dropdown.Item
              active={active === "consecutive"}
              onClick={() => setActive("consecutive")}
            >
              Consecutive
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          active={active === "settings"}
          as={Link}
          onClick={() => setActive("settings")}
        >
          Settings
        </Menu.Item>
      </Menu>
    </AppHeaderRoot>
  );
};

const AppHeader = () => {
  const location = useLocation();
  return (
    <AppHeaderRoot>
      <Menu inverted>
        <Menu.Item as={Link} className="logo-container" to={paths.showcase}>
          <Image className="logo" src={logo} title="Showcase" />
          Showcase
        </Menu.Item>
        <Dropdown item text="Concepts">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to={paths.forms}
              active={location.pathname === paths.forms}
            >
              Forms
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={paths.tables}
              active={location.pathname === paths.tables}
            >
              Tables
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </AppHeaderRoot>
  );
};

const PageContainerRoot = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex: 1;
  flex-direction: column;
  padding: 24px 12%;

  div.ui.header {
    font-size: 1.8em;
  }
`;

const PageContainer = ({ size = "medium", children }) => {
  return <PageContainerRoot>{children}</PageContainerRoot>;
};

const Buttons = () => (
  <div>
    <Header as="h3" attached="top">
      Buttons
    </Header>
    <Segment attached>
      <Button content="Click Me!" />
      <Button primary content="Click Me!" />
      <Button secondary content="Click Me!" />
    </Segment>
  </div>
);

const Headers = () => (
  <div>
    <Header as="h3" attached="top">
      Headers
    </Header>
    <Segment attached>
      <Header as="h1" content="Lorem ipsum dolor sit amet" />
      <Header as="h2" content="Lorem ipsum dolor sit amet" />
      <Header as="h3" content="Lorem ipsum dolor sit amet" />
      <Header as="h4" content="Lorem ipsum dolor sit amet" />
      <Header as="h5" content="Lorem ipsum dolor sit amet" />
      <Header as="h6" content="Lorem ipsum dolor sit amet" />
    </Segment>
  </div>
);

const Menus = () => {
  return (
    <div>
      <Header as="h3" attached="top">
        Menus
      </Header>
      <Segment attached>
        <MenuExample inverted={true} />
        <br />
        <MenuExample />
      </Segment>
    </div>
  );
};

const Showcase = () => (
  <>
    <Header content="Showcase" />
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Buttons />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Headers />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Menus />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

const PageRoute = ({ path, component }) => (
  <PageContainer>
    <Route path={path} component={component} />
  </PageContainer>
);

const AppRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    display: flex;
    flex: 1;
  }
`;

const Forms = () => {
  return (
    <>
      <Header content="Forms" />
    </>
  );
};

const Tables = () => {
  return (
    <>
      <Header content="Tables" />
    </>
  );
};

function App() {
  return (
    <AppRoot>
      <AppHeader />
      <div className="content">
        <Switch>
          <PageRoute path={paths.forms} component={Forms} />
          <PageRoute path={paths.tables} component={Tables} />
          <PageRoute path={paths.showcase} component={Showcase} />
          <Redirect to={paths.showcase} />
        </Switch>
      </div>
    </AppRoot>
  );
}

export default App;
