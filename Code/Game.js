var CatanApp;
(function (CatanApp) {
    /*
     * Game
     */
    var Game = (function () {
        function Game(_gameID) {
            this.Players = [];
            this.gameID = _gameID;
        }
        return Game;
    })();
    CatanApp.Game = Game;
})(CatanApp || (CatanApp = {}));
