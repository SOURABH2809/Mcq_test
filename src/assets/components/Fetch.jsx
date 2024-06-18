import { useState, useEffect } from "react";
import React from "react";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "type", headerName: "TYPE" },
];

const Fetch = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/api?topicwise=microeconomics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTopics(data);
        } else {
          throw new Error('Fetched data is not an array');
        }
      })
      .catch((error) => {
        setError(error.toString());
      });
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {Array.isArray(topics) && topics.map((topic) => (
          <li key={topic.id}>
            {columns.map((column) => (
              <span key={column.field}>{topic[column.field]} </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
