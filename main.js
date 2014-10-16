/**
 * START GAME
 */
cc.game.onStart = function () {

    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(160, 180, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    var resources = [];
    for (var i in CityDefender.assets) {
        resources.push(CityDefender.assets[i]);
    }

    cc.LoaderScene.preload(resources, function () {
        cc.director.runScene(new CD.Scenes.Stage());
    }, this);
};

cc.game.run();
