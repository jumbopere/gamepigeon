"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [inputLetters, setInputLetters] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [words, setWords] = useState({});

  useEffect(() => {
    const fetchWords = async () => {
      try {
        if (inputLetters && inputLetters.length === 6) {
          const response = await axios.post('/api/generate-words', { inputLetters });
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (inputLetters.length !== 6) {
  //       setErrorMessage('Please provide exactly 6 letters.');
  //       return;
  //     }
  //     const response = await fetch('/api/generate-words', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //       inputLetters
  //       }),
  //     })
  //     console.log(response.data)
  //     const { threeLetterWords,
  //       fourLetterWords,
  //       fiveLetterWords,
  //       sixLetterWords} = await response.json()
  //       console.log( threeLetterWords,
  //         fourLetterWords,
  //         fiveLetterWords,
  //         sixLetterWords)
  //     setWords([ threeLetterWords,
  //       fourLetterWords,
  //       fiveLetterWords,
  //       sixLetterWords]);
  //       console.log("dispaly",words['sixLetterWords'])
  //     setErrorMessage('');
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setWords([]);
  //     setErrorMessage('An error occurred while fetching words.');
  //   }
  // };

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
    <form className="flex justify-center mb-4">
      <input
        type="text"
        value={inputLetters}
        onChange={(e) => setInputLetters(e.target.value)}
        placeholder="Enter the 6 letters"
        className="border border-gray-400 px-3 py-2 mr-2 w-full max-w-xs"
      />
    </form>
    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
    <div className="flex flex-wrap justify-center">
    {/* {words["sixLetterWords"]?.length > 0 && (
  <div className="w-full mb-4 flex flex-wrap justify-center">
    <h2 className="w-full text-lg font-bold text-center mb-2">6 Letter Words</h2>
    <ul className="inline-block text-center">
      {words["sixLetterWords"].map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  </div>
)} */}
{words["sixLetterWords"]?.length > 0 && (
  <div className="w-full mb-4 flex flex-wrap justify-center">
    <h2 className="w-full text-lg font-bold text-center mb-2">6 Letter Words</h2>
    <div className="flex flex-wrap justify-center">
      {words["sixLetterWords"]?.map((word, index) => (
        <span key={index} className="mr-2">{word}</span>
      ))}
    </div>
  </div>
)}
  {words["fiveLetterWords"]?.length > 0 && (
  <div className="w-full mb-4 flex flex-wrap justify-center">
    <h2 className="w-full text-lg font-bold text-center mb-2">5 Letter Words</h2>
    <div className="flex flex-wrap justify-center">
      {words["fiveLetterWords"]?.map((word, index) => (
        <span key={index} className="mr-2">{word}</span>
      ))}
    </div>
  </div>
)}
  {words["fourLetterWords"]?.length > 0 && (
  <div className="w-full mb-4 flex flex-wrap justify-center">
    <h2 className="w-full text-lg font-bold text-center mb-2">4 Letter Words</h2>
    <div className="flex flex-wrap justify-center">
      {words["fourLetterWords"]?.map((word, index) => (
        <span key={index} className="mr-2">{word}</span>
      ))}
    </div>
  </div>
)}
   {words["threeLetterWords"]?.length > 0 && (
  <div className="w-full mb-4 flex flex-wrap justify-center">
    <h2 className="w-full text-lg font-bold text-center mb-2">3 Letter Words</h2>
    <div className="flex flex-wrap justify-center">
      {words["threeLetterWords"]?.map((word, index) => (
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
    // <div className="flex min-h-full justify-center bg-gray-100">
    //        <header className=" py-6 bg-gray-100">
    //     <div className="container mx-auto text-center">
    //         <h1 className="text-3xl font-semibold">PJ Anagrams Solver</h1>
    //         <p className="text-lg mt-2">Simple Anagrams Solver</p>
    //     </div>
    // </header>
    //   <div className="container mx-auto p-4">
    //   <h1 className="text-xl font-bold mb-4 italic justify-center">Just type the Anagram Word</h1>
    //     <form className="flex items-center ">
       
    //       <input
    //         type="text"
    //         value={inputLetters}
    //         onChange={(e) => setInputLetters(e.target.value)}
    //         placeholder="Enter the 6 letters"
    //         className="border border-gray-400 px-3 py-2 mr-2"
    //       />
         
    //     </form>
    //     {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    //     <div className="flex flex-wrap mt-4">
    //       {words?.sixLetterWords?.length > 0 && (
    //         <div className="w-full md:w-1/2 lg:w-1/4">
    //           <h2 className="text-lg font-bold">6 Letter Words</h2>
    //           <ul className="inline-block">
    //             {words?.sixLetterWords.map((word, index) => (
    //               <li key={index}>{word}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //       {words["fiveLetterWords"]?.length > 0 && (
    //         <div className="w-full md:w-1/2 lg:w-1/4">
    //           <h2 className="text-lg font-bold">5 Letter Words</h2>
    //           <ul className="inline-block">
    //             {words["fiveLetterWords"].map((word, index) => (
    //               <li key={index}>{word}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //       {words["fourLetterWords"]?.length > 0 && (
    //         <div className="w-full md:w-1/2 lg:w-1/4">
    //           <h2 className="text-lg font-bold">4 Letter Words</h2>
    //           <ul className="inline-block">
    //             {words["fourLetterWords"].map((word, index) => (
    //               <li key={index}>{word}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //       {words["threeLetterWords"]?.length > 0 && (
    //         <div className="w-full md:w-1/2 lg:w-1/4">
    //           <h2 className="text-lg font-bold">3 Letter Words</h2>
    //           <ul className="inline-block">
    //             {words["threeLetterWords"].map((word, index) => (
    //               <li key={index}>{word}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   <footer className="bg-gray-100  py-4">
    //     <div className="container mx-auto text-center">
    //         <p>&copy; 2024 My App. All rights reserved.</p>
    //     </div>
    // </footer>
    // </div>
  );
}
