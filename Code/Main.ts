///<reference path="ResourceTile.ts"/>
///<reference path="GameBoard.ts"/>
///<reference path="Game.ts"/>
module CatanApp {

	export class CatanApp {

		public static createNewGame() {

			// Create a new Game
			var game = new Game("1");

			// Create a new Game Board
			var gameBoard = new GameBoard();

			console.log("The new game board object is...");
			console.log(gameBoard);

		}
	}
}