///<reference path="ResourceTile.ts"/>
///<reference path="GameBoard.ts"/>
///<reference path="Game.ts"/>
var CatanApp;
(function (CatanApp_1) {
    var CatanApp = (function () {
        function CatanApp() {
        }
        CatanApp.createNewGame = function () {
            // Create a new Game
            var game = new CatanApp_1.Game("1");
            // Create a new Game Board
            var gameBoard = new CatanApp_1.GameBoard();
            // Set up the board for a new game
            //gameBoard.initBoard();
            console.log("The new game board object is...");
            console.log(gameBoard);
        };
        return CatanApp;
    })();
    CatanApp_1.CatanApp = CatanApp;
})(CatanApp || (CatanApp = {}));
