const os = require('os');
const fs = require('fs');

console.log(os.version());

fs.writeFileSync('myFile.txt', 'Hello');
fs.appendFileSync('myFile.txt', ' how r u?');

const dataBuffer = fs.readFileSync('myFile.txt'); // this will print binary format
const dataString = fs.readFileSync('myFile.txt').toString(); // this will print string and sync ways that mean it will wait.
fs.readFile('myFile.txt', (error, data) => {
    if (error) {
        // console.log(error);
        throw error;
    } else {
        console.log(data.toString());
    }
}); // this will work async ways

console.log(dataBuffer, dataString);
