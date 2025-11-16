// Published by Nati Goral, Sapir Mizrahi and Barak Shwam

const fs = require("fs");

/**
 * Creates 3 text files: 1.txt, 2.txt, 3.txt
 * Each file contains between 3–10 random lines.
 * Lines look like: a1, a2, a3... b1, b2... c1...
 */
function buildInputFiles() {
  const filenames = ["1.txt", "2.txt", "3.txt"];
  const letters = ["a", "b", "c"];

  filenames.forEach((name, index) => {
    //for each file, num of lines and their content
    const linesCount = 3 + Math.floor(Math.random() * 10);
    const letter = letters[index];
    let content = "";

    // add to content
    for (let i = 1; i <= linesCount; i++) {
      content += `${letter}${i}\n`;
    }

    fs.writeFileSync(name, content, "utf8");
  });

  console.log("Random input files generated: 1.txt, 2.txt, 3.txt");
}

/**
 * Merges three text files by the pattern:
 *  j lines from file 1
 *  j lines from file 2
 *  j lines from file 3
 *  ... increasing j each round (1, 2, 3, ...)
 *
 * If one file runs out of lines, the others continue.
 *
 * @param {string} file1 - Path to first input file
 * @param {string} file2 - Path to second input file
 * @param {string} file3 - Path to third input file
 * @param {string} outputFile - Path to output file
 */
function mergeThreeFiles(file1, file2, file3, outputFile) {
  // Read all files into arrays of lines
  const inputs = [file1, file2, file3].map((fileName) => {
    try {
      // try reading filename and split contents, filter out empty entries.
      return fs
        .readFileSync(fileName, "utf8")
        .split(/\r?\n/)
        .filter((line) => line !== "");
    } catch (err) {
      // return empty list if error on read.
      console.error(`Could not read ${fileName}, treating as empty.`);
      return [];
    }
  });

  const mergedLines = [];
  let j = 1;
  let moreLines = true;

  while (moreLines) {
    // loop until files empty and reset flag, iterate each file
    moreLines = false;
    for (const lines of inputs) {
      // take j lines from curr file and check if has more lines
      for (let i = 0; i < j; i++) {
        if (lines.length > 0) {
          mergedLines.push(lines.shift());
          moreLines = true;
        }
      }
    }
    j++;
  }

  // write all lines at once, no trailing newline
  fs.writeFileSync(outputFile, mergedLines.join("\n"), "utf8");
  console.log("Merge complete:", outputFile);
}

buildInputFiles();
mergeThreeFiles("1.txt", "2.txt", "3.txt", "output.txt");

module.exports = mergeThreeFiles;
