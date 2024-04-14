import React, { useState } from 'react';
import '../index.css'
function MultiStyleToggleList() {
  // Sample list of items
  const items = ["Item 1", "Item 2", "Item 3"];

  // State to manage the style for each item
  // Initialize all to false (not styled)
  const [styleStates, setStyleStates] = useState(new Array(items.length).fill(false));

  // Function to toggle the style for a specific item
  const toggleItemStyle = (index) => {
    const newStyleStates = [...styleStates];
    newStyleStates[index] = !newStyleStates[index];
    setStyleStates(newStyleStates);
  };

  return (
    <ul className="list-none p-5">
      {items.map((item, index) => (
        <li key={index} className={`p-2 ${styleStates[index] ? 'text-red-500 font-bold' : 'text-gray-700'}`}>
          {item}
          <button
            onClick={() => toggleItemStyle(index)}
            className="ml-4 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Toggle Style
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MultiStyleToggleList;
