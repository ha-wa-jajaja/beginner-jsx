import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [teams, addTeams] = useState([]);

  async function getTeams() {
    const response = await fetch("https://www.balldontlie.io/api/v1/teams");
    const data = await response.json();

    const filtered = data.data.map((ele) => {
      return { city: ele.city, name: ele.name };
    });

    addTeams(filtered);
  }

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <h2>fetching data</h2>
      {teams.map((ele) => (
        <p>
          {ele.city} {ele.name}
        </p>
      ))}
    </div>
  );
};

export default FetchApi;
