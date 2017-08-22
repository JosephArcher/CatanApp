///<reference path="ResourceTile.ts"/>

module CatanApp {

	export class GameBoard {

		/*
		* Game Board
		*/

		// Each game has a constant number of each game tile
		public totalWoodTiles: number = 4;
		public totalWheatTiles: number = 4;
		public totalSheepTiles: number = 4;
		public totalBrickTiles: number = 3;
		public totalRockTiles: number = 3;
		public totalDesertTiles: number = 1;

		/*
		 * Key: T1N1-T19N6
		 * Value: Node Object
		 * This Hashmap represents each possible building location on the board at one time (Some will intersect)
		 */
		public nodeList = {};

		/*
		 * Key: (T1N1 - T19N6 , T1N1 - T19N6) Pair two connected node objects
		 * Value: Edge Object
		 * This Hashmap represents each possible road location on the board at one time (Some will intersect)
		 */
		public edgeList = {};
		/*
		 * Key: Tile Number (T1 - T 19)
		 * Value: Tile Object
		 * This Hashmap represents each Catan tile on the board and its location
		 */
		public tileList = {};

		/*
		 * Constructor - Each time a Game Board is created a random 
		 * board layout (Resource Tiles + Number Tiles) is generated
		 * 
		 */
		public constructor() {

			// Create an array of all of the possible resource tiles for the board
			var resourceTiles = this.generateGameTileArray();

			// Create an array of all of the possible number tiles for the board
			var numberTiles = this.generateNumberTilesArray();

			// Generate a random board layout using the resource tiles and the number tiles
			this.generateGameBoard(resourceTiles,numberTiles);
		}
		private generateNodeList
		/*
		 * generateNumberTilesArray - Creates an ORDERED array of numbers. Used to generate the board.
		 * 
		 */
		private generateNumberTilesArray () {

			var numberTilesArray = [];

			for(var i:number = 1; i < 12; i++) {

				if(i != 7) {
					if(i != 2 && i != 12) {
						numberTilesArray.push(i);
						numberTilesArray.push(i);
					}
					else {
						numberTilesArray.push(i);
					}
				}
			}
			return numberTilesArray;
		}

		/*
		 * generateGameTileArray - Creates an ORDERED array of resource tiles. Used to generate the board.
		 */
		private generateGameTileArray () {

			var catanTilesArray = [];

			// Wood
			for(var i = 0; i < this.totalWoodTiles; i++ ) {
				catanTilesArray.push(new ResourceTile("Wood", '0', false));
			}
			// Wheat
			for(var i = 0; i < this.totalWheatTiles; i++ ) {
				catanTilesArray.push(new ResourceTile("Wheat", '0', false));
			}
			// Sheep
			for(var i = 0; i < this.totalSheepTiles; i++ ) {
				catanTilesArray.push(new ResourceTile("Sheep", '0', false));
			}
			// Brick
			for(var i = 0; i < this.totalBrickTiles; i++ ) {
				catanTilesArray.push(new ResourceTile("Brick", '0', false));
			}
			// Rock
			for(var i = 0; i < this.totalRockTiles; i++ ) {
				catanTilesArray.push(new ResourceTile("Rock", '0', false));
			}
			// Desert
			for(var i = 0; i < this.totalDesertTiles; i++ ) {
				catanTilesArray.push(new ResourceTile("Desert", '0', false));
			}

			return catanTilesArray;
		}

		/*
		 * generateGameBoard
		 * @Params
		 * resouceTiles - An ordered array of the resource tile objects
		 * numberTiles  - An ordered arary of number strings
		 * 
		 */
		private generateGameBoard(resourceTiles, numberTiles) {

			// Generate game board tiles
			for(var i:number = 0; i < 19; i++) {

				/*  
				 *	Randomly determine the next catan tile 
				 */

				// Generate a random number in the bounds of the catanTilesArray index
				var randomResourceTileNumber =	Math.floor((Math.random() * resourceTiles.length));

				// Get the next resource tile
				var nextResourceTile = resourceTiles[randomResourceTileNumber];

				// Remove the used value from the array
	    		resourceTiles.splice(randomResourceTileNumber, 1);

				/* 
				 * Randomly determine the next number tile ONLY if the next tile is not desert
				 */

				// Make sure we dont assign a Desert tile a number :)
				if(nextResourceTile.tileType != "Desert") { 

					// Generate a random number in the bounds of the numberTilesArray index
					var randomNumberTileNumber = Math.floor((Math.random() * numberTiles.length));

					// Get the next number tile that will be used
					var nextNumberTile = numberTiles[randomNumberTileNumber];

					// Remove the used number tile from the array
					numberTiles.splice(randomNumberTileNumber,1);

					// Assign the catan tile the randomly generated number tile
					nextResourceTile.tileNumber = nextNumberTile
				}
				// Desert tile gets the robber (Only one robber so only the first tile is set)
				else {
					nextResourceTile.hasRobber = true;
				}

				// Generate a key for the hashmap using the format ("Ti")
				var key:string = "T" + i;
			
				// Add tile to the board tile layout list
				this.tileList[key] = nextResourceTile;
			}
		}
	}
}