let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type)
let app= new PIXI.Application({width: 256, height: 256, transparent: false, resolution: 1});
document.body.appendChild(app.view);
console.log(app.renderer);
app.renderer.backgroundColor= 0x061639;
console.log(app.renderer.view.height);
app.renderer.resize(window.innerWidth,window.innerHeight);
PIXI.loader
.add("images/cat.png")
.add("images/door.png")
.add("images/tileset.png")
.on("progress", loadProgressHandler)
.load(setup);
function loadProgressHandler(loader , resource){
console.log("loading" + resource.url);
console.log("progress " + loader.progress);

}
function setup(){
    console.log("setup");
    let sprite = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
    let texture = PIXI.utils.TextureCache["images/door.png"];
    let texture1 = PIXI.utils.TextureCache["images/tileset.png"];
    let rectangle = new PIXI.Rectangle(192,64,64,64);
    texture1.frame = rectangle;
    let sprite1 = new PIXI.Sprite(texture);
    let sprite2 = new PIXI.Sprite(texture1);
    sprite1.position.set(120,120);
    sprite.x=160;
    sprite.y= 160;
    sprite.anchor.set(0.5,0.5);
    sprite.height= 80;
    sprite.width = 80;
    sprite.scale.set(1,1);
    console.log(sprite.height,sprite.width)
    app.stage.addChild(sprite);
    app.stage.addChild(sprite1);
    app.stage.addChild(sprite2);
}
