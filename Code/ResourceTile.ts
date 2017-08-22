
module CatanApp {

	export class ResourceTile {

		/*
		* Tile
		*/
		public tileType : string;  // Desert, Wood, Rock, Sheep, Wheat, Brick, Water
		public tileNumber: string; // 2 - 6 & 8 - 12
		public hasRobber: boolean; // If the tile currently has the robber on it then TRUE otherwise FALSE

		public constructor(_tileType: string, _tileNumber: string, _hasRobber:boolean) {

			this.tileType = _tileType;
			this.tileNumber = _tileNumber;
			this.hasRobber = _hasRobber
		}
		/*
		 * getTileType
		 */
		public getTileType() { 
			return this.tileType;
		}

		/*
		 * getTileNumber
		 */
		public getTileNumber(){
			return this.tileNumber;
		}
		
		/*
		 * hasRobber
		 */
		public getHasRobber(){
			return this.hasRobber;
		}
	}
}