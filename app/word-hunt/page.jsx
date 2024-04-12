"use client";
import React, { useState, useRef } from 'react';
import axios from 'axios';

const WordHunt = () => {
  const [grid, setGrid] = useState(Array.from({ length: 4 }, () => Array(4).fill('')));
  const [results, setResults] = useState([]);
  const refs = useRef([]);

  const handleChange = (e, row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = e.target.value.toLowerCase().slice(-1); // Only allow single letter and convert to uppercase
    setGrid(newGrid);
    
    // Move focus to the next input
    if (e.target.value !== '') {
      if (col < 3) {
        refs.current[row][col + 1].focus();
      } else if (row < 3) {
        refs.current[row + 1][0].focus();
      }
    }
  };

  const handleSubmit = async () => {
    console.log('hell9')
    try {
      const response = await axios.post('/api/word-hunt', { grid });
      console.log(response)
      setResults(response?.data?.foundWords);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  return (
  //   <div className="container mx-auto p-4 flex-grow ">
  //   <h1 className="text-xl font-bold mb-4 italic text-center">
  //       Enter the Word Hunt Words
  //       </h1>
  //   <div className="grid grid-cols-4 gap-2 mb-4 ">
  //     {grid.map((row, rowIndex) => (
  //       <React.Fragment key={rowIndex}>
  //         {row.map((col, colIndex) => (
  //           <input
  //             key={`${rowIndex}-${colIndex}`}
  //             ref={(el) => {
  //               if (!refs.current[rowIndex]) refs.current[rowIndex] = [];
  //               refs.current[rowIndex][colIndex] = el;
  //             }}
  //             type="text"
  //             value={col}
  //             onChange={(e) => handleChange(e, rowIndex, colIndex)}
  //             maxLength={1}
  //             className="w-8 h-8 px-2 py-1 border border-gray-300 rounded-md text-center focus:outline-none focus:border-gray-300"
  //           />
  //         ))}
  //       </React.Fragment>
  //     ))}
  //   </div>
  //   <button
  //     onClick={handleSubmit}
  //     className="bg-blue-500 text-white px-4 py-2  italic text-center justify-center rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  //   >
  //     Find Words
  //   </button>
  //   {results.length > 0 && (
  //     <div className="mt-4">
  //       <h2 className="text-lg font-semibold mb-2">Found Words:</h2>
  //       <div className="grid grid-cols-4 gap-2">
  //         {results.map((word, index) => (
  //           <div key={index} className="px-2 py-1 border border-gray-300 rounded-md">{word}</div>
  //         ))}
  //       </div>
  //     </div>
  //   )}
  // </div>
  <div className="container mx-auto p-4 flex-grow ">
  <h1 className="text-xl font-bold mb-4 italic text-center">
    Enter the Word Hunt Words
  </h1>
  <div className="max-w-md mx-auto mb-4">
    <div className="grid grid-cols-4 gap-2">
      {grid.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((col, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              ref={(el) => {
                if (!refs.current[rowIndex]) refs.current[rowIndex] = [];
                refs.current[rowIndex][colIndex] = el;
              }}
              type="text"
              value={col}
              onChange={(e) => handleChange(e, rowIndex, colIndex)}
              maxLength={1}
              className="w-8 h-8 px-2 py-1 border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
  <div className="flex justify-center mb-4">
    <button
      onClick={handleSubmit}
      className="bg-blue-500 text-white px-4 py-2 italic rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Find Words
    </button>
  </div>
  {results.length > 0 && (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Found Words:</h2>
      <div className="grid grid-cols-4 gap-2">
        {results.map((word, index) => (
          <div key={index} className="px-2 py-1 border border-gray-300 rounded-md">{word}</div>
        ))}
      </div>
    </div>
  )}
</div>
  );
};

export default WordHunt;