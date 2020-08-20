import React, { useState } from "react";
import { Header, Button, Modal } from "semantic-ui-react";

const Showcase = () => {
  const [showConfirmModal1, setShowConfirmModal1] = useState(false);
  const [showConfirmModal2, setShowConfirmModal2] = useState(false);
  return (
    <>
      <Header as="h2" content="Showcase" />

      <Header as="h2" dividing content="Buttons" />
      <div>
        <Button content="Click Me!" />
        <Button primary content="Click Me!" />
        <Button secondary content="Click Me!" />
      </div>

      <Header as="h2" dividing content="Headers" />
      <div>
        <Header as="h1">This is an H1 Header</Header>
        <Header as="h2">This is an H2 Header</Header>
        <Header as="h3">This is an H3 Header</Header>
        <Header as="h4">This is an H4 Header</Header>
        <Header as="h5">This is an H5 Header</Header>
        <Header as="h6">This is an H6 Header</Header>
      </div>

      <Header as="h2" dividing content="Modals" />
      <div>
        <Modal
          open={showConfirmModal1}
          size="tiny"
          trigger={
            <Button
              content="Confirm Modal"
              onClick={() => setShowConfirmModal1(true)}
            />
          }
        >
          <Modal.Header>Success</Modal.Header>
          <Modal.Content>
            The complicated requested action was successfully completed.
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="OK"
              onClick={() => setShowConfirmModal1(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
        <Modal
          open={showConfirmModal2}
          size="tiny"
          trigger={
            <Button
              content="Simpler Confirm Modal"
              onClick={() => setShowConfirmModal2(true)}
            />
          }
        >
          <Modal.Content>
            This will remove all data on your hard drive. Are you sure?
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Cancel"
              onClick={() => setShowConfirmModal2(false)}
            ></Button>
            <Button
              content="Yes, I'm Sure"
              onClick={() => setShowConfirmModal2(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </div>
    </>
  );
};

export default Showcase;
