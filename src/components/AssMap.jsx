import React from 'react'

const AssMap = () => {
    const users = [
        {
          id: 1,
          name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          password: "password123",
        },
        {
          id: 2,
          name: "Jane Smith",
          username: "janesmith",
          email: "jane@example.com",
          password: "password456",
        },
        {
          id: 3,
          name: "Bob Johnson",
          username: "bobjohnson",
          email: "bob@example.com",
          password: "password789",
        },
        {
            id: 4,
            name: "Jane Smith",
            username: "janesmith",
            email: "jane@example.com",
            password: "password456",
          },
          {
            id: 5,
            name: "Jane Smith",
            username: "janesmith",
            email: "jane@example.com",
            password: "password456",
          },
          {
            id: 6,
            name: "Jane Doe",
            username: "janesmith",
            email: "jane@example.com",
            password: "pass456",
          },
          {
            id: 7,
            name: "Jane Smith",
            username: "janesmith",
            email: "jane@example.com",
            password: "word456",
          },
          {
            id: 8,
            name: "Jane Smith",
            username: "janesmith",
            email: "jane@example.com",
            password: "password456",
          },
          {
            id: 9,
            name: "Doe Smith",
            username: "janesmith",
            email: "Doe@example.com",
            password: "password456",
          },
      ];
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td className="btn btn-secondary">Edit</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default AssMap