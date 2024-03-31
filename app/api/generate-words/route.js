import { NextApiRequest } from "next/server";
import words from "an-array-of-english-words"

const filterWords = (inputLetters, wordLength) => {
    const validWords = words.filter(word => {
      if (word.length !== wordLength) return false;
      const letters = inputLetters.split('');
      for (let char of word) {
        const index = letters.indexOf(char);
        if (index === -1) return false;
        letters.splice(index, 1);
      }
      return true;
    });
    return validWords;
  };
  

export  const POST =async (req, res)=> {
    const { inputLetters } = await req.json();

console.log()
    if (!inputLetters|| inputLetters.length !== 6 ) {
      return Response.json({ error: 'Please provide 6 letters' }, {status:400});
    }
  
    const threeLetterWords = filterWords(inputLetters, 3);
    const fourLetterWords = filterWords(inputLetters, 4);
    const fiveLetterWords = filterWords(inputLetters, 5);
    const sixLetterWords = filterWords(inputLetters, 6);
  
    return Response.json({ 
      threeLetterWords,
      fourLetterWords,
      fiveLetterWords,
      sixLetterWords
    });
}