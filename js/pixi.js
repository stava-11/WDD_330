// const { DisplacementFilter } = require("./pixi_min");
window.onresize = function(){ location.reload(); }

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
});
document.body.appendChild(app.view);

let image = new PIXI.Sprite.from('images/polarBear_Large.jpg');
image.width = window.innerWidth;
image.height = window.innerHeight;
app.stage.addChild(image);

map = new PIXI.Sprite.from('images/polar_bear_map.jpg');
map.width = window.innerWidth;
map.height = window.innerHeight;
app.stage.addChild(map);
displacement = new PIXI.filters.DisplacementFilter(map);
app.stage.filters = [displacement];

window.onmousemove = function(e) {
    displacement.scale.x = (window.innerWidth / 2 - e.clientX) / 25;
    displacement.scale.y = (window.innerHeight / 2 - e.clientY) / 25;
}



