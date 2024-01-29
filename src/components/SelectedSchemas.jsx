// SelectedSchemas.js
import React from "react";
import { Form } from "react-bootstrap";

function SelectedSchemas({ selectedSchema }) {
  return (
    <Form.Group controlId="selectedSchemas">
      <Form.Label>Selected Schemas</Form.Label>
      <div className="selected-schemas">
        {selectedSchema.map((schema, index) => (
          <div key={index} className="selected-schema">
            {schema.label}
          </div>
        ))}
      </div>
    </Form.Group>
  );
}

export default SelectedSchemas;