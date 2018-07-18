let app = new PIXI.Application({
    width: 400,
    height: 400
});

let DirEnum = Object.freeze({"left":0, "right":1, "up":2, "down":3});
let StateEnum = Object.freeze({"on":1, "off":2, "bonus":3});
let state;
let dir;


document.body.appendChild(app.view);
//create grid
let gri = new PIXI.Container();
console.log(app.renderer.view.height);

let rows =12;
let column = 20;
let hei= (app.renderer.view.height)/rows;
let wid= (app.renderer.view.width)/column; 
let graphics = [];
for (let j = 0; j< rows; j++) {
    graphics[j] = [];

    for (let i = 0; i < column; i++) {
        graphics[j][i] = new PIXI.Graphics();

        graphics[j][i].beginFill(0xffffff);
        graphics[j][i].lineStyle(1, 0xff0000, 1);
        graphics[j][i].drawRect(1,0,wid-1,hei-1);
        graphics[j][i].position.x =wid*i;
        graphics[j][i].position.y = hei*j;
        gri.addChild(graphics[j][i]);
    };
};
app.stage.addChild(gri);