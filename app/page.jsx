"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [inputLetters, setInputLetters] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        if (inputLetters && inputLetters.length === 6) {
          const response = await axios.post('/api/generate-words', { inputLetters });
         
            console.log(response.data)
          setWords(response.data);
          setErrorMessage('');
        } else {
          setWords([]);
        }
      } catch (error) {
        console.error('Error:', error);
        setWords([]);
        setErrorMessage('An error occurred while fetching words.');
      }
    };

    fetchWords();
  }, [inputLetters]);


  

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
  <header className="py-6 bg-gray-100">
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-semibold">PJ Anagrams Solver</h1>
      <p className="text-lg mt-2">Simple Anagrams Solver</p>
    </div>
  </header>
  <div className="container mx-auto p-4 flex-grow">
    <h1 className="text-xl font-bold mb-4 italic text-center">Just type the Anagram Word</h1>
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={inputLetters}
        onChange={(e) => setInputLetters(e.target.value)}
        placeholder="Enter the 6 letters"
        className="border border-gray-400 px-3 py-2 mr-2 w-full max-w-xs"
      />
    </div>
    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
    <div className="flex flex-wrap justify-center">
  {words[3]?.length > 0 && (
    <div className="w-full mb-4 flex flex-wrap justify-center">
      <h2 className="w-full text-lg font-bold text-center mb-2">6 Letter Words</h2>
      <div className="flex flex-wrap justify-center">
        {words[3]?.map((word, index) => (
          <span key={index} className="mr-2">{word}</span>
        ))}
      </div>
    </div>
  )}
  {words[2]?.length > 0 && (
    <div className="w-full mb-4 flex flex-wrap justify-center">
      <h2 className="w-full text-lg font-bold text-center mb-2">5 Letter Words</h2>
      <div className="flex flex-wrap justify-center">
        {words[2]?.map((word, index) => (
          <span key={index} className="mr-2">{word}</span>
        ))}
      </div>
    </div>
  )}
  {words[1]?.length > 0 && (
    <div className="w-full mb-4 flex flex-wrap justify-center">
      <h2 className="w-full text-lg font-bold text-center mb-2">4 Letter Words</h2>
      <div className="flex flex-wrap justify-center">
        {words[1]?.map((word, index) => (
          <span key={index} className="mr-2">{word}</span>
        ))}
      </div>
    </div>
  )}
  {words[0]?.length > 0 && (
    <div className="w-full mb-4 flex flex-wrap justify-center">
      <h2 className="w-full text-lg font-bold text-center mb-2">3 Letter Words</h2>
      <div className="flex flex-wrap justify-center">
        {words[0]?.map((word, index) => (
          <span key={index} className="mr-2">{word}</span>
        ))}
      </div>
    </div>
  )}
</div>
  </div>
  <footer className="bg-gray-100 py-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 <Link href="https://github.com/jumbopere" className="hover:text-gray-300">Pere Jumbo</Link>. All rights reserved.</p>
    </div>
  </footer>
</div>
   
  );
}
