import words from "an-array-of-english-words";

const filterWords = (inputLetters, maxLength) => {
  const inputMap = {};
  for (let letter of inputLetters) {
    inputMap[letter] = (inputMap[letter] || 0) + 1;
  }

  return words.filter(word => {
    if (word.length > maxLength) return false;
    const wordMap = {};
    for (let char of word) {
      wordMap[char] = (wordMap[char] || 0) + 1;
      if (wordMap[char] > (inputMap[char] || 0)) return false;
    }
    return true;
  });
};

export const POST = async (req, res) => {
  const { inputLetters } = await req.json();
 
const newInputLetters= inputLetters.toLowerCase().trim()
  const maxLength = Math.min(6, newInputLetters.length);
  const validWords = filterWords(newInputLetters, maxLength);

  const wordGroups = {};
  for (let word of validWords) {
    const length = word.length;
    if (!wordGroups[length]) {
      wordGroups[length] = [];
    }
    wordGroups[length].push(word);
  }

  return Response.json(Object.values(wordGroups));
};