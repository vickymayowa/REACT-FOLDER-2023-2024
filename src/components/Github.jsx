import React, {useEffect ,useState} from 'react'
import axios from 'axios';

const Github = () => {
  const [userData, setUserData] = useState([]);
    // axios.get('https://api.github.com/users')
    //   .then((response) => {
    //     console.log(response.data[0].login);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error.message);
    //   });
    useEffect(() => {
      axios.get('https://api.github.com/users')
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data from GitHub API', error.message);
        });
    }, []);
  return (
    <>
 <div className="flex flex-wrap -m-4">
      {userData.map((user) => (
        <div key={user.id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="text-center text-lg font-semibold mt-2">{user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 mt-2 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      ))}
    </div>
{/* login url and avatar */}
    </>
  )
}

export default Github