"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Anagrams = () => {
  const [inputLetters, setInputLetters] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [words, setWords] = useState({});

  useEffect(() => {
    const fetchWords = async () => {
      try {
        if (inputLetters && inputLetters.length === 6) {
          await axios
            .post("api/anagrams", { inputLetters })
            .then((response) => {
              console.log(response?.data);
              setWords(response?.data);
              setErrorMessage("");
            });
        } else {
          setWords({});
        }
      } catch (error) {
        console.error("Error:", error);
        setWords([]);
        setErrorMessage("An error occurred while fetching words.");
      }
    };

    fetchWords();
  }, [inputLetters]);

  return (

      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-xl font-bold mb-4 italic text-center">
          Just type the Anagram Word
        </h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={inputLetters}
            onChange={(e) => setInputLetters(e.target.value)}
            placeholder="Enter the 6 letters"
            className="border border-gray-400 px-3 py-2 mr-2 w-full max-w-xs"
          />
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center">
          {words[5]?.length > 0 && (
            <div className="w-full mb-4 flex flex-wrap justify-center">
              <h2 className="w-full text-lg font-bold text-center mb-2">
                6 Letter Words
              </h2>
              <div className="flex flex-wrap justify-center">
                {words[5].map((word, index) => (
                  <span key={index} className="mr-2">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {words[4]?.length > 0 && (
            <div className="w-full mb-4 flex flex-wrap justify-center">
              <h2 className="w-full text-lg font-bold text-center mb-2">
                5 Letter Words
              </h2>
              <div className="flex flex-wrap justify-center">
                {words[4].map((word, index) => (
                  <span key={index} className="mr-2">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
          {words[3]?.length > 0 && (
            <div className="w-full mb-4 flex flex-wrap justify-center">
              <h2 className="w-full text-lg font-bold text-center mb-2">
                4 Letter Words
              </h2>
              <div className="flex flex-wrap justify-center">
                {words?.[3].map((word, index) => (
                  <span key={index} className="mr-2">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
          {words[2]?.length > 0 && (
            <div className="w-full mb-4 flex flex-wrap justify-center">
              <h2 className="w-full text-lg font-bold text-center mb-2">
                3 Letter Words
              </h2>
              <div className="flex flex-wrap justify-center">
                {words[2].map((word, index) => (
                  <span key={index} className="mr-2">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
   
  );
};
export default Anagrams;
