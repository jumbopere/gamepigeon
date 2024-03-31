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
  if (!inputLetters || inputLetters.length !== 6) {
    return Response.json({status:400},{ error: 'Please provide 6 letters' });
  }

  const maxLength = Math.min(6, inputLetters.length);
  const validWords = filterWords(inputLetters, maxLength);

  const wordGroups = {};
  for (let word of validWords) {
    const length = word.length;
    if (!wordGroups[length]) {
      wordGroups[length] = [];
    }
    wordGroups[length].push(word);
  }

  return Response.json([wordGroups['3'],wordGroups['4'], wordGroups['5'], wordGroups['6']]);
};