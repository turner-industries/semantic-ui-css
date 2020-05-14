import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { Menu, Image, Dropdown, Header } from "semantic-ui-react";
import styled from "@emotion/styled";
import logo from "./resources/semantic-ui-logo.png";

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

const AppHeader = () => {
  return (
    <AppHeaderRoot>
      <Menu inverted>
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

  .ui.header {
    font-size: 1.8em;
  }
`;

const PageContainer = ({ size = "medium", children }) => {
  return <PageContainerRoot>{children}</PageContainerRoot>;
};

const Showcase = () => (
  <>
    <Header content="Showcase" />
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
          <PageRoute path="/forms" component={Forms} />
          <PageRoute path="/tables" component={Tables} />
          <PageRoute path="/showcase" component={Showcase} />
          <Redirect to="/showcase" />
        </Switch>
      </div>
    </AppRoot>
  );
}

export default App;
