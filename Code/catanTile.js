var CatanApp;
(function (CatanApp) {
    var CatanTile = (function () {
        function CatanTile(_tileType, _tileNumber, _hasRobber) {
            this.tileType = _tileType;
            this.tileNumber = _tileNumber;
            this.hasRobber = _hasRobber;
        }
        /*
         * getTileType
         */
        CatanTile.prototype.getTileType = function () {
            return this.tileType;
        };
        /*
         * getTileNumber
         */
        CatanTile.prototype.getTileNumber = function () {
            return this.tileNumber;
        };
        /*
         * hasRobber
         */
        CatanTile.prototype.getHasRobber = function () {
            return this.hasRobber;
        };
        return CatanTile;
    })();
    CatanApp.CatanTile = CatanTile;
})(CatanApp || (CatanApp = {}));
