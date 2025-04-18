import React, { useState } from 'react';

const schemas = {
  jobs: {
    job_id: 'number',
    title: 'text',
    place: 'text',
    job_type: 'text',
    recruiter_id: 'number',
  },
  students: {
    student_id: 'number',
    name: 'text',
    college: 'text',
    gpa: 'number',
    github_link: 'url',
    linkedin_link: 'url',
    resume_link: 'url',
  },
};

export default function Crud() {
  const [db, setDb] = useState('jobs');
  const [operation, setOperation] = useState('read');
  const [formData, setFormData] = useState({});
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);

  const currentSchema = schemas[db];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCrud = async () => {
    const baseUrl = `http://localhost:3000/${db}`;
    let url = baseUrl;
    let options = {};

    try {
      switch (operation) {
        case 'create':
          options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          };
          break;
        case 'read':
          url = id ? `${baseUrl}/${id}` : baseUrl;
          options = { method: 'GET' };
          break;
        case 'update':
          url = `${baseUrl}/${id}`;
          options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          };
          break;
        case 'delete':
          url = `${baseUrl}/${id}`;
          options = { method: 'DELETE' };
          break;
        default:
          return;
      }

      const res = await fetch(url, options);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: 'An error occurred during the operation.' });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Dynamic CRUD App</h2>

      {/* Select Database */}
      <div className="mb-4">
        <label className="block font-medium">Select Database</label>
        <select
          value={db}
          onChange={(e) => setDb(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="jobs">Jobs</option>
          <option value="students">Students</option>
        </select>
      </div>

      {/* Select Operation */}
      <div className="mb-4">
        <label className="block font-medium">Select CRUD Operation</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="create">Create</option>
          <option value="read">Read</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </div>

      {/* Input ID for read/update/delete */}
      {['read', 'update', 'delete'].includes(operation) && (
        <div className="mb-4">
          <label className="block font-medium">ID</label>
          <input
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      {/* Dynamic Input Fields for Create/Update */}
      {['create', 'update'].includes(operation) && (
        <div className="mb-4 space-y-2">
          {Object.entries(currentSchema).map(([field, type]) => (
            <div key={field}>
              <label className="block font-medium capitalize">{field.replace('_', ' ')}</label>
              <input
                type={type}
                name={field}
                placeholder={`Enter ${field}`}
                value={formData[field] || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleCrud}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Execute
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 border rounded text-sm overflow-auto">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
