import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <p>Total Orders: 10</p>
            <p>Recent Orders: 3</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p>Notifications: On</p>
            <p>Language: English</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard