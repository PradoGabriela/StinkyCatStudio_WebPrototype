const JsonParser = require('../data/jsonparser');
const path = require('path');


class Game extends JsonParser {
    constructor() {
        super(path.join(__dirname, '../data/games.json')); // Define the JSON file path
    }

    // Get all users
    getAllGames(callback) {
        const games = this.readData();
        callback(games);
    }

    
}

module.exports = Game;