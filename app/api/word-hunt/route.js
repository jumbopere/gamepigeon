
import words from "an-array-of-english-words";

const filterWords = (inputLetters, wordLength) => {
    try {
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
    } catch (error) {
        throw new Error("Error filtering words: " + error.message);
    }
};

export const POST = async (req) => {
    try {
        const { inputLetters } = await req.json();
        if (!inputLetters || inputLetters.length !== 16) {
            return Response.json({ error: 'Please provide 16 letters' }, { status: 400 });
        }

        const fourLetterWords = filterWords(inputLetters, 4);

        return Response.json({ fourLetterWords });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
};