// SchemaForm.js
import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";

function SchemaForm({ schemaOptions, handleAddSchema }) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <Form.Group controlId="addSchema">
      <Form.Label>Add Schema to Segment</Form.Label>
      <Row>
        <Col xs={8}>
          <Select
            options={schemaOptions}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            isSearchable
            placeholder="Select schema..."
          />
        </Col>
        <Col xs={4}>
          <Button
            variant="success"
            onClick={() => handleAddSchema(selectedOption)}
            disabled={!selectedOption}
          >
            + Add new schema
          </Button>
        </Col>
      </Row>
    </Form.Group>
  );
}

export default SchemaForm;