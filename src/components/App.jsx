// App.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import '../App.css';
// import './index.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState([]);
  const [schemaOptions, setSchemaOptions] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);

  const handleAddSchema = (selectedOption) => {
    setSelectedSchema([...selectedSchema, selectedOption]);
    setSchemaOptions(
      schemaOptions.filter((option) => option.value !== selectedOption.value)
    );
  };

  const handleSaveSegment = async () => {
    try {
      const segmentData = {
        segment_name: segmentName,
        schema: selectedSchema.map((schema) => ({
          [schema.value]: schema.label,
        })),
      };

      // Send `segmentData` to the server using an API endpoint
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(segmentData),
      });

      if (!response.ok) {
        throw new Error("Error saving segment");
      }

      const responseData = await response.json();
      console.log("Segment saved:", responseData);

      // Close the modal
      setShowModal(false);
    } catch (error) {
      console.error("Error saving segment:", error.message);
      // Handle error, show an error message to the user, etc.
    }
  };

  return (
    <div className="app-container">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Save Segment
      </Button>

      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        segmentName={segmentName}
        setSegmentName={setSegmentName}
        selectedSchema={selectedSchema}
        handleSaveSegment={handleSaveSegment}
        schemaOptions={schemaOptions}
        handleAddSchema={handleAddSchema}
      />
    </div>
  );
}

export default App;
