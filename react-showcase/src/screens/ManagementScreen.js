import React, { useContext } from "react";
import { Header, Button, Table, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import { testItems } from "../testData";
import { ThemeContext } from "../ThemeContext";

const ManagementScreenRoot = styled.div`
  .page-header {
    align-items: center;
    display: flex;
    margin-bottom: 8px;

    .ui.header {
      flex: 1;
      margin: 0px;
    }
  }

  .table-container {
    overflow: auto;
    max-height: 540px;
  }
  .ui.table {
    border-top: none;
    margin-top: 0px;

    th {
      border-top: 1px solid rgba(34, 36, 38, 0.1);
      position: sticky;
      top: 0px;
      z-index: 2;
    }
  }
`;

const ManagementScreen = () => {
  const { useInvertedStyle } = useContext(ThemeContext);

  return (
    <ManagementScreenRoot>
      <div className="page-header">
        <Header as="h2" content="Items" />
        <div>
          <Button secondary>
            <Icon name="download" />
            Download as PDF
          </Button>
          <Button primary>
            <Icon name="add" />
            Create
          </Button>
        </div>
      </div>
      <div className="table-container">
        <Table
          inverted={useInvertedStyle}
          striped
          padded
          singleLine
          unstackable
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Other</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className="table-body">
            {testItems.map((x) => (
              <Table.Row key={x.id}>
                <Table.Cell>{x.id}</Table.Cell>
                <Table.Cell>{x.name}</Table.Cell>
                <Table.Cell>{x.age}</Table.Cell>
                <Table.Cell>{x.other}</Table.Cell>
                <Table.Cell collapsing>
                  <Button primary>
                    <Icon name="edit outline" />
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </ManagementScreenRoot>
  );
};

export default ManagementScreen;
