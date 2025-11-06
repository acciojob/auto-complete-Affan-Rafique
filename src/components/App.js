import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(fruits); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim() === "") {
        setSuggestions(fruits); 
      } else {
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Fruit Search</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {suggestions.map((item, index) => (
          <li key={`relativeListItem${index + 1}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

