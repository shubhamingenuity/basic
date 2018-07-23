let app = new PIXI.Application({
    width: 400,
    height: 400
});

let DirEnum = Object.freeze({"left":0, "right":1, "up":2, "down":3});
let StateEnum = Object.freeze({"on":1, "off":2, "bonus":3});
let state;
let dir;
let textureb,spriteb,texturer,spriter,textureg,spriteg;
// add direction and state to snake
function rect(){
  this.state = StateEnum.off;
  this.dir = DirEnum.up;
};

document.body.appendChild(app.view);
//create grid
let gri = new PIXI.Container();
console.log(app.renderer.view.height);
let sprit = [];

//load images
PIXI.loader
.add("assets/blue.png")
.add("assets/red.png")
.add("assets/green.jpg")
.load(setup);
function setup(){
    textureb = PIXI.utils.TextureCache["assets/blue.png"];

   texturer = PIXI.utils.TextureCache["assets/red.png"];
 textureg = PIXI.utils.TextureCache["assets/green.jpg"];
//console.log(textureb.width);

let rows =12;
let column = 20;
let hei= (app.renderer.view.height)/rows;
let wid= (app.renderer.view.width)/column; 
//console.log(textureb.frame.width);

textureb.frame.width= wid-1;
textureb.frame.height= hei-1;
texturer.frame.width= wid-1;
texturer.frame.height= hei-1;

textureg.frame.width= wid-1;
textureg.frame.height= hei-1;
let rec = [];

function chng_state( stt, k , l ){
  if(stt=== 1){
    
      rec[k][l].state= stt;
      sprit[k][l].texture = texturer;
     // arr.lineStyle(1, 0xff0000, 1);
      //console.log(rec[arr.j][arr.i].StateEnum);
   /* texturer.frame.width= wid-1;
    texturer.frame.height= hei-1;
    texturer.frame.position.set(arr.position.x ,arr.position.y);
      texturer.frame= arr;
       spriter= new PIXI.Sprite(texturer);*/
       //spriter.position.set(arr.position.x, arr.position.y);  

  }
};
/*let fr = new PIXI.Graphics();

fr.lineStyle(1, 0xff0000, 1);
fr.drawRect(1,0,118,118);

textureb.frame = fr;
spriteb= new PIXI.Sprite(textureb)
app.stage.addChild(spriteb);*/
// create rect and fit image in it 
let reco;
let graphics = [];
for (let j = 0; j< rows; j++) {
    graphics[j] = [];
     rec[j] = [];
     sprit[j] = [];
    for (let i = 0; i < column; i++) {
        // create grid , assign properties and store sprites
        graphics[j][i] = new PIXI.Graphics();
        graphics[j][i].drawRect(1,0,wid-1,hei-1);
       // textureb = PIXI.utils.TextureCache["assets/blue.png"];
        //textureb.frame.width= wid-1;
        //textureb.frame.height= hei-1;
       reco = new rect();
         rec[j][i] = reco;
        textureb.frame = graphics[j][i];
        console.log(textureb.frame);
        spriteb= new PIXI.Sprite(textureb)
        spriteb.position.set(wid*i,hei*j);
        sprit[j][i]= spriteb;

        graphics[j][i].lineStyle(1, 0xff0000, 1);

        graphics[j][i].position.x =wid*i;
        graphics[j][i].position.y = hei*j;
        //spriteb.position.set()
        app.stage.addChild(spriteb);

        gri.addChild(graphics[j][i]);
    };
};
console.log(rec[3][4].dir);
console.log(graphics[11][10]);
console.log(sprit[11][10]);
// initial static snake
chng_state(StateEnum.on , 11 ,10);
chng_state(StateEnum.on, 10,10);
chng_state(StateEnum.on, 9, 10);

chng_state(StateEnum.on,8,10);
app.ticker.add(delta => gameloop(delta));

};
function gameloop(delta){
    sprit[8][10].x +=1;
}
app.stage.addChild(gri);
