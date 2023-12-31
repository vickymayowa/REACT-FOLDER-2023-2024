import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axios from 'axios';


const Fetch = () => {
  const [users, setUsers] = useState([]);
    const fetchData =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
  return (
    <>
  <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={fetchData} > Get data</button>
    <button>Hello world</button>
    </>
  )
}

export default Fetch