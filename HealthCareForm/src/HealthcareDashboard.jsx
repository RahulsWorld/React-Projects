import React, { useState } from "react";

function HealthcareDashboard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !file) {
      alert("Please fill in all fields");
      return;
    }

    alert(`Submitted!\nName: ${name}\nAge: ${age}\nFile: ${file.name}`);

    setName("");
    setAge("");
    setFile(null);
  };

  return (
    <div className="form-container">
      <h1>Healthcare Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Medical File</label>
          <input type="file" id="file" onChange={handleFileChange} required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HealthcareDashboard;
