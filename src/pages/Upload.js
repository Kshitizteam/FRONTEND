import { useState } from "react";
import "./Upload.css"; // Styling file

const Upload = () => {
  const [files, setFiles] = useState({});

  const handleFileChange = (e, docType) => {
    setFiles({ ...files, [docType]: e.target.files[0] });
  };

  const documents = [
    { name: "PAN Card" },
    { name: "Aadhaar Card" },
    { name: "Loan Application" },
    { name: "Salary Slip" },
  ];

  return (
    <div className="upload-container">
      <h2>Listing Documentation</h2>
      <table>
        <thead>
          <tr>
            <th>Documentation</th>
            <th>Status</th>
            <th>Docs</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => {
            const isUploaded = files[doc.name];
            return (
              <tr key={index}>
                <td>{doc.name}</td>
                <td>
                  <span className={isUploaded ? "submitted-badge" : "required-badge"}>
                    {isUploaded ? "Submitted" : "Required"}
                  </span>
                </td>
                <td>
                  <label className="attach-button">
                    Attach
                    <input type="file" onChange={(e) => handleFileChange(e, doc.name)} />
                  </label>
                </td>
                <td><input type="text" placeholder="Add comments..." /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Upload;
