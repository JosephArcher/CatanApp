module CatanApp {

	/*
	 * Game
	 */
	export class Game {

		public gameID;
		public GameBoard;
		public Players  = [];

		public constructor (_gameID) {
			this.gameID = _gameID;
		}

	}

}