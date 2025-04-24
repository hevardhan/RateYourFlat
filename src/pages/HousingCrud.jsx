import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HousingCRUD() {
  const [operation, setOperation] = useState('create');
  const [formData, setFormData] = useState({ city: '', college_id: '', name: '' });
  const [data, setData] = useState([]);

  const fetchColleges = async () => {
    const res = await axios.get('http://localhost:5000/api/colleges');
    setData(res.data);
  };

  useEffect(() => {
    if (operation === 'read') fetchColleges();
  }, [operation]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    switch (operation) {
      case 'create':
        await axios.post('http://localhost:5000/api/colleges', formData);
        alert('College created');
        break;
      case 'read':
        fetchColleges();
        break;
      case 'update':
        await axios.put(`http://localhost:5000/api/colleges/${formData.college_id}`, formData);
        alert('College updated');
        break;
      case 'delete':
        await axios.delete(`http://localhost:5000/api/colleges/${formData.college_id}`);
        alert('College deleted');
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md space-y-4 text-black">
      <h2 className="text-2xl font-bold text-center">College Housing CRUD</h2>
      <select
        className="w-full border p-2 rounded"
        value={operation}
        onChange={e => setOperation(e.target.value)}
      >
        <option value="create">Create</option>
        <option value="read">Read</option>
        <option value="update">Update</option>
        <option value="delete">Delete</option>
      </select>

      {(operation === 'create' || operation === 'update') && (
        <>
          <input
            type="text"
            name="college_id"
            placeholder="College ID"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="College Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
        </>
      )}

      {(operation === 'delete' || operation === 'update') && (
        <input
          type="text"
          name="college_id"
          placeholder="College ID (for update/delete)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>

      {operation === 'read' && (
        <div>
          <h3 className="text-xl font-semibold mt-4">All Colleges:</h3>
          <ul className="list-disc pl-5">
            {data.map((college, index) => (
              <li key={index}>{college.name} ({college.college_id}) - {college.city}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}