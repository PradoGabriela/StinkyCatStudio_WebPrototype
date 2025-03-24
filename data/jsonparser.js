const fs = require("fs");
const path = require("path");

class JsonParser {
    constructor(filePath) {
        this.filePath = filePath;
    }

    // Read data from the JSON file
    readData() {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify([])); // Create the file if it doesn't exist
        }
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }

    // Write data to the JSON file
    writeData(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

module.exports = JsonParser;