import React, { useState } from 'react';

const ClientsPanel = () => {
  const [clients, setClients] = useState([
    {
      name: 'Carl',
      lastName: 'Smith',
      email: 'carl.s33@gmail.com',
      mobileNo: '440888888',
      project: 'Front-end landscape development',
    },
    {
      name: 'Sarah',
      lastName: 'Company',
      email: 'shcompany@gmail.com',
      mobileNo: '440877776',
      project: 'Connection back-end to front-end',
    },
    {
      name: 'Josh',
      lastName: 'Martin',
      email: 'josh.martin@outlook.com',
      mobileNo: '34677788677',
      project: 'Import data from database to front',
    },
  ]);

  const handleCreateClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div>
      <h2>Clients Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Project</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.lastName}</td>
              <td>{client.email}</td>
              <td>{client.mobileNo}</td>
              <td>{client.project}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CreateClientForm onCreateClient={handleCreateClient} />
    </div>
  );
};

const CreateClientForm = ({ onCreateClient }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    mobileNo: '',
    project: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateClient(formData);
    setFormData({
      name: '',
      lastName: '',
      email: '',
      mobileNo: '',
      project: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Client</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mobileNo"
        placeholder="Mobile No."
        value={formData.mobileNo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="project"
        placeholder="Project"
        value={formData.project}
        onChange={handleChange}
      />
      <button type="submit">Create Client</button>
    </form>
  );
};

export default ClientsPanel;