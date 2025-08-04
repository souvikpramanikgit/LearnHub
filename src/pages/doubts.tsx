import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Doubts(): JSX.Element {
  const [formData, setFormData] = useState({
    learnerId: '',
    name: '',
    subject: '',
    doubt: '',
    description: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(formData);
  alert('Doubt submitted successfully!');

  // ✅ Reset form data
  setFormData({
    learnerId: '',
    name: '',
    subject: '',
    doubt: '',
    description: '',
    file: null,
  });

  // ✅ Also reset the file input manually (since it's read-only in React state)
  const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
  if (fileInput) {
    fileInput.value = '';
  }
};


  return (
    <Layout title="Doubts" description="Submit your doubts here">
      <style>
        {`
          .doubt-form-container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            background-color: #fff;
          }

          .doubt-form-container h1 {
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .doubt-form-container label {
            display: block;
            margin-top: 1rem;
            font-weight: bold;
          }

          .doubt-form-container input,
          .doubt-form-container textarea {
            width: 100%;
            padding: 0.5rem;
            margin-top: 0.3rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }

          .doubt-form-container button {
            margin-top: 1.5rem;
            width: 100%;
            padding: 0.75rem;
            background-color: #2e8555;
            color: #fff;
            font-size: 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .doubt-form-container button:hover {
            background-color: #256f46;
          }
        `}
      </style>
      <main className="doubt-form-container">
        <h1>Ask a Doubt</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Learner ID:</label>
          <input
            type="text"
            name="learnerId"
            value={formData.learnerId}
            onChange={handleChange}
            required
          />

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label>Doubt Title:</label>
          <input
            type="text"
            name="doubt"
            value={formData.doubt}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <textarea
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Upload Image:</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept="image/*"
          />

          <button type="submit">Submit Doubt</button>
        </form>
      </main>
    </Layout>
  );
}
