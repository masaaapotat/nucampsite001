import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function CommentForm({ campsiteId }) {
    // State Initialization
  const [ modalOpen, setModalOpen ] = useState(false);
  return (
    <>
      <Button
        outline={true}
        // modalOpen state to be set to true, which will cause the Modal to open.
        onClick={() => setModalOpen(true)}
      >
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      {/*  rendering a Modal */}
      <Modal
        //   cause the Modal to open or close depending on the value of modalOpen.
        isOpen={modalOpen}
      >
        <ModalHeader
          toggle={() => {
            // cause the modalOpen state to be set back to false when the Modal is closed.
            setModalOpen(false);
          }}
        >
          Add Comment
        </ModalHeader>
        {/* ModalBody component that simply shows the current campsiteId */}
        <ModalBody>campsite: {campsiteId}</ModalBody>
      </Modal>
    </>
  );
}

export default CommentForm;
