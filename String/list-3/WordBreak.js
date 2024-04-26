function wordWrap(words, maxWidth) {
    const lines = [];
    let currentLine = '';

    for (let word of words) {
        if (currentLine.length + word.length <= maxWidth) {
            // Add the word to the current line
            if (currentLine.length !== 0) {
                // If the current line is not empty, add a space before adding the word
                currentLine += ' ';
            }
            currentLine += word;
        } else {
            // Start a new line
            lines.push(currentLine);
            currentLine = word;
        }
    }

    // Add the last line
    lines.push(currentLine);

    return lines;
}

// Example usage:
const words = ["This", "is", "an", "example", "of", "the", "Word", "Wrap", "Problem"];
const maxWidth = 10;
console.log(wordWrap(words, maxWidth)); // [    "This is an",    "example of",    "the Word",    "Wrap",    "Problem"]
