// ModalComponent.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SchemaForm from "./SchemaForm";
import SelectedSchemas from "./SelectedSchemas";

function ModalComponent({
  showModal,
  setShowModal,
  segmentName,
  setSegmentName,
  selectedSchema,
  handleSaveSegment,
  schemaOptions,
  handleAddSchema,
}) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create Segment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="segmentName">
            <Form.Label>Segment Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter segment name"
              value={segmentName}
              onChange={(e) => setSegmentName(e.target.value)}
            />
          </Form.Group>
          <SchemaForm
            schemaOptions={schemaOptions}
            handleAddSchema={handleAddSchema}
          />
          <SelectedSchemas selectedSchema={selectedSchema} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveSegment}>
          Save Segment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;