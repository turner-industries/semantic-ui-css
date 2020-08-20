import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import ManagementScreen from "./screens/ManagementScreen";
import Showcase from "./screens/Showcase";
import AppHeader from "./components/AppHeader";
import PageContainer from "./components/PageContainer";
import Forms from "./screens/Forms";
import Tables from "./screens/Tables";

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

  .ui.inverted.table th {
    background-color: #494949;
  }
`;

const App = () => {
  return (
    <AppRoot>
      <AppHeader />
      <div className="content">
        <Switch>
          <PageRoute path="/forms" component={Forms} />
          <PageRoute path="/tables" component={Tables} />
          <PageRoute path="/items" component={ManagementScreen} />
          <PageRoute path="/showcase" component={Showcase} />
          <Redirect to="/showcase" />
        </Switch>
      </div>
    </AppRoot>
  );
};

export default App;
