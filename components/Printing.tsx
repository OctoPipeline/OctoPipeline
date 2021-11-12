import React from "react";

export default function Printing() {
  const handleSubmission = () => {};
  return (
    <div>
      <input type="file" name="file" />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
