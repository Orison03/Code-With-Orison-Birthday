import React from "react";
import { useState, useEffect } from "react";
const apiUrl = "https://api.github.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  // fetching of data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);
        setUsers(data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1 className="text-white font-bold text-2xl capitalize mb-4 animate-bounce text-center mt-10">
        Fetch Users With UseEffect Hook
      </h1>
      <section className="grid place-items-center mt-10 md:grid md:grid-cols-4">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <div
              className="bg-white px-6 py-6 m-4 flex space-x-4 rounded-xl pr-24 hover:cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out shadow-lg"
              key={id}
            >
              <img src={avatar_url} className="h-14 w-14 rounded-full" />
              {/* description */}
              <div>
                <p className="text-black font-semibold capitalize tracking-wide">
                  {login}
                </p>
                <a href={html_url} className="text-blue-400">github</a>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default App;
