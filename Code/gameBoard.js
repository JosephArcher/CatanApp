///<reference path="ResourceTile.ts"/>
var CatanApp;
(function (CatanApp) {
    var GameBoard = (function () {
        /*
         * Constructor - Each time a Game Board is created a random
         * board layout (Resource Tiles + Number Tiles) is created
         *
         */
        function GameBoard() {
            /*
            * Game Board
            */
            // Each game has a constant number of each game tile
            this.totalWoodTiles = 4;
            this.totalWheatTiles = 4;
            this.totalSheepTiles = 4;
            this.totalBrickTiles = 3;
            this.totalRockTiles = 3;
            this.totalDesertTiles = 1;
            /*
             * Key: T1N1-T19N6
             * Value: Node Object
             * This Hashmap represents each possible building location on the board at one time (Some will intersect)
             */
            this.nodeList = {};
            /*
             * Key: (T1N1 - T19N6 , T1N1 - T19N6) Pair two connected node objects
             * Value: Edge Object
             * This Hashmap represents each possible road location on the board at one time (Some will intersect)
             */
            this.edgeList = {};
            /*
             * Key: Tile Number (T1 - T 19)
             * Value: Tile Object
             * This Hashmap represents each Catan tile on the board and its location
             */
            this.tileList = {};
            // Create an array of all of the possible resource tiles for the board
            var resourceTiles = this.generateGameTileArray();
            // Create an array of all of the possible number tiles for the board
            var numberTiles = this.generateNumberTilesArray();
            // Generate a random board layout using the resource tiles and the number tiles
            this.generateGameBoard(resourceTiles, numberTiles);
        }
        /*
         * generateNumberTilesArray - Creates an ORDERED array of numbers. Used to generate the board.
         *
         */
        GameBoard.prototype.generateNumberTilesArray = function () {
            var numberTilesArray = [];
            for (var i = 1; i < 12; i++) {
                if (i != 7) {
                    if (i != 2 && i != 12) {
                        numberTilesArray.push(i);
                        numberTilesArray.push(i);
                    }
                    else {
                        numberTilesArray.push(i);
                    }
                }
            }
            return numberTilesArray;
        };
        /*
         * generateGameTileArray - Creates an ORDERED array of resource tiles. Used to generate the board.
         */
        GameBoard.prototype.generateGameTileArray = function () {
            var catanTilesArray = [];
            // Wood
            for (var i = 0; i < this.totalWoodTiles; i++) {
                catanTilesArray.push(new CatanApp.ResourceTile("Wood", '0', false));
            }
            // Wheat
            for (var i = 0; i < this.totalWheatTiles; i++) {
                catanTilesArray.push(new CatanApp.ResourceTile("Wheat", '0', false));
            }
            // Sheep
            for (var i = 0; i < this.totalSheepTiles; i++) {
                catanTilesArray.push(new CatanApp.ResourceTile("Sheep", '0', false));
            }
            // Brick
            for (var i = 0; i < this.totalBrickTiles; i++) {
                catanTilesArray.push(new CatanApp.ResourceTile("Brick", '0', false));
            }
            // Rock
            for (var i = 0; i < this.totalRockTiles; i++) {
                catanTilesArray.push(new CatanApp.ResourceTile("Rock", '0', false));
            }
            // Desert
            for (var i = 0; i < this.totalDesertTiles; i++) {
                catanTilesArray.push(new CatanApp.ResourceTile("Desert", '0', false));
            }
            return catanTilesArray;
        };
        /*
         * generateGameBoard -
         * @Params
         *
         */
        GameBoard.prototype.generateGameBoard = function (resourceTiles, numberTiles) {
            // Generate game board tiles
            for (var i = 0; i < 19; i++) {
                /*
                 *	Randomly determine the next catan tile
                 */
                // Generate a random number in the bounds of the catanTilesArray index
                var randomResourceTileNumber = Math.floor((Math.random() * resourceTiles.length));
                // Get the next resource tile
                var nextResourceTile = resourceTiles[randomResourceTileNumber];
                // Remove the used value from the array
                resourceTiles.splice(randomResourceTileNumber, 1);
                /*
                 * Randomly determine the next number tile ONLY if the next tile is not desert
                 */
                // Make sure we dont assign a Desert tile a number :)
                if (nextResourceTile.tileType != "Desert") {
                    // Generate a random number in the bounds of the numberTilesArray index
                    var randomNumberTileNumber = Math.floor((Math.random() * numberTiles.length));
                    // Get the next number tile that will be used
                    var nextNumberTile = numberTiles[randomNumberTileNumber];
                    // Remove the used number tile from the array
                    numberTiles.splice(randomNumberTileNumber, 1);
                    // Assign the catan tile the randomly generated number tile
                    nextResourceTile.tileNumber = nextNumberTile;
                }
                else {
                    nextResourceTile.hasRobber = true;
                }
                // Generate a key for the hashmap using the format ("Ti")
                var key = "T" + i;
                // Add tile to the board tile layout list
                this.tileList[key] = nextResourceTile;
            }
        };
        return GameBoard;
    })();
    CatanApp.GameBoard = GameBoard;
})(CatanApp || (CatanApp = {}));
