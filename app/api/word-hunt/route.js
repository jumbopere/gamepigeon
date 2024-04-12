import words from "an-array-of-english-words"

// const findWordsInGrid= (grid) =>{
//     // Check if the input is a valid 4x4 grid
//     if (!grid || grid.length !== 4 || !grid.every(row => row.length === 4)) {
//         throw new Error("Invalid grid input. Please provide a 4x4 array of letters.");
//     }
  
//     const dictionary = new Set(words); // Use a set for efficient word lookups
  
//     const directions = [
//         [0, 1],   // Right
//         [1, 0],   // Down
//         [1, 1],   // Diagonal down-right
//         [-1, 1],  // Diagonal up-right
//         [-1, 0],  // Up
//         [0, -1],  // Left
//         [1, -1],  // Diagonal down-left
//         [-1, -1]  // Diagonal up-left
//     ];
  
//     const foundWords = new Set(); // Using a Set to avoid duplicate words
  
//     function exploreFromCell(row, col, currentWord, visited) {
//         // Check if cell is within grid bounds and not visited
//         if (row < 0 || row >= 4 || col < 0 || col >= 4 || visited[row][col]) {
//             return;
//         }
  
//         const letter = grid[row][col];
//         currentWord += letter;
  
//         // Check if the current word is a valid word and add it to results
//         if (dictionary.has(currentWord)) {
//             foundWords.add(currentWord);
//         }
  
//         // Mark current cell as visited
//         visited[row][col] = true;
  
//         // Explore neighbors in all directions
//         for (const [dRow, dCol] of directions) {
//             exploreFromCell(row + dRow, col + dCol, currentWord, visited);
//         }
  
//         // Backtrack: mark current cell as not visited
//         visited[row][col] = false;
//     }
  
//     // Start exploring from each cell in the grid
//     for (let row = 0; row < 4; row++) {
//         for (let col = 0; col < 4; col++) {
//             exploreFromCell(row, col, "", Array.from({ length: 4 }, () => Array(4).fill(false)));
//         }
//     }
  
//     // Convert the Set to an array and filter out words less than 3 characters long
//     const filteredWords = Array.from(foundWords).filter(word => word.length >= 3);
//    const sortWords= filteredWords.sort((a, b) => b.length - a.length)
    
//     return sortWords;
//   }
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }
}

export function findWordsInGrid(grid) {
    const trie = new Trie();
    words.forEach(word => trie.insert(word));

    const directions = [
        [0, 1],   // Right
        [1, 0],   // Down
        [1, 1],   // Diagonal down-right
        [-1, 1],  // Diagonal up-right
        [-1, 0],  // Up
        [0, -1],  // Left
        [1, -1],  // Diagonal down-left
        [-1, -1]  // Diagonal up-left
    ];

    const foundWords = new Set();

    function exploreFromCell(row, col, currentWord, visited, node) {
        if (row < 0 || row >= 4 || col < 0 || col >= 4 || visited[row][col]) {
            return;
        }

        const letter = grid[row][col];
        currentWord += letter;

        if (!node.children.has(letter)) {
            return;
        }

        node = node.children.get(letter);

        if (node.isEndOfWord) {
            foundWords.add(currentWord);
        }

        visited[row][col] = true;

        for (const [dRow, dCol] of directions) {
            exploreFromCell(row + dRow, col + dCol, currentWord, visited, node);
        }

        visited[row][col] = false;
    }

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            exploreFromCell(row, col, "", Array.from({ length: 4 }, () => Array(4).fill(false)), trie.root);
        }
    }

    return Array.from(foundWords).filter(word => word.length >= 3);
}
  export const POST = async(req, res)=> {
    const { grid } =await req.json();
    const lowercaseWords = grid.map(word => word.map(x=> x.toLowerCase()));
    if (lowercaseWords)
  
  
    try {
      if (!lowercaseWords || lowercaseWords.length !== 4 || !lowercaseWords.every(row => row.length === 4)) {
        throw new Error("Invalid grid input. Please provide a 4x4 array of letters.");
      }
  
      const foundWords = findWordsInGrid(lowercaseWords).sort((a, b) => b.length - a.length);
      return Response.json({ foundWords});
    } catch (error) {
       return Response.json({status:400},{ error: error.message });
  }
}