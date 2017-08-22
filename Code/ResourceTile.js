var CatanApp;
(function (CatanApp) {
    var ResourceTile = (function () {
        function ResourceTile(_tileType, _tileNumber, _hasRobber) {
            this.tileType = _tileType;
            this.tileNumber = _tileNumber;
            this.hasRobber = _hasRobber;
        }
        /*
         * getTileType
         */
        ResourceTile.prototype.getTileType = function () {
            return this.tileType;
        };
        /*
         * getTileNumber
         */
        ResourceTile.prototype.getTileNumber = function () {
            return this.tileNumber;
        };
        /*
         * hasRobber
         */
        ResourceTile.prototype.getHasRobber = function () {
            return this.hasRobber;
        };
        return ResourceTile;
    })();
    CatanApp.ResourceTile = ResourceTile;
})(CatanApp || (CatanApp = {}));
