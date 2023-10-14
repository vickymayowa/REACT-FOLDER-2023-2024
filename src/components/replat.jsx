import React, {useState} from 'react'

const replat = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        userName: '',
        email:'',
        password:'',
    })
    const handleInputChange = (e) => {
        const { first_name, userName } = e.target;
        setFormData({
          ...formData,
          [first_name]: userName,

        });
        console.log(setFormData);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
    <>
    <div className="container-fluid col-10 col-md-5 my-2 p-4 shadow-5 shadow mt-5 rounded">
        <div className="row">
            <div className="fw-lighter text-center">
                REACT ASSIGNMENT
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control"  placeholder="Enter your First Name"  value={formData.first_name} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="email">UserName</label>
                    <input type="text" className="form-control" placeholder="Enter your email" value={formData.userName} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" value={formData.email} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"  placeholder="Enter your Password" value={formData.password} />
                </div>
                <div className="form-group my-3">
                    <button className="btn btn-success w-100" type="submit" onClick={handleInputChange}>Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default replat