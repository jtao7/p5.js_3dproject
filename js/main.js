 // let objs =[]// 3d object
 //var mm= ['obj1','obj2']
let obj0
var xoff= 0
var t;





function preload () {
  // Load 3D model with normalise parameter set to true
  //noStroke()
  obj0 = loadModel('models/bg_ring.obj', true)
  obj1 = loadModel('models/bird.obj', true)
  // objs = [obj0,obj1]
}

function setup () {
  // create a 3D canvas that matches the size of the window
  createCanvas(innerWidth, innerHeight, WEBGL)
  // create a drawing canvas to use as a texture
  tex = createGraphics(400, 400)
  tex.background(255)


  t = 0;



}

function light (){
  // let dx= mouseX -width/2; let dy= mouseY-height/2;
  // let dv= createVector(dx,dy,0); dv.normalize();
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  pointLight(255,0,0,-200,50,0)
  // pointLight(255,255,0,mouseX,mouseY,)
  //directionalLight(255,255,255,-10,1000,100)
}

function generativeTexture () {
  // this is the function with the code for creating the texture
  // first it creates a random color
  // if(mouseIsPressed) {
  // //   let r = random(255)
  // // let g = random(255)
  // let r = mouseX
  // let g = mouseY
  // let b = random(255)
  // tex.fill(r, g, b)
  // // then it creates a random circle of that color
  // let x = random(0, width)
  // let y = random(0, height)
  // let s = random(50, 100)
  // //noStroke()
  // //Stroke(1)
  // tex.ellipse(x, y, s)
  // tex.background(255);
  // for(i=0)
  tex.noFill();
  tex.strokeWeight(random(0,5))
  tex.stroke(mouseX,random(20,180),random(100,200));
  var x1 = tex.width * noise(t + 15);
  var x2 = tex.width * noise(t + 25);
  var x3 = tex.width * noise(t + 35);
  var x4 = tex.width * noise(t + 45);
  var y1 = tex.height * noise(t + 55);
  var y2 = tex.height * noise(t + 65);
  var y3 = tex.height * noise(t + 75);
  var y4 = tex.height * noise(t + 85);

  tex.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  // tex.bezier(x2, y2, x3, y4, x1, y1, x4, y3)
  tex.bezier(x4, y2, x1, y3, x3, y1, x4, y3)
  t += 0.8;

}


function draw () {
  background(100,0,200) // create grey background color
  light()

  // rotateX(frameCount * 0.01) // rotates the obj on the X axis
  // rotateY(frameCount * 0.01) // rotates the obj on the Y axis
  //// var x= map(noise(xoff), 0, 1, 0, width)
  //// xoff += 0.001
  //// box(x,20,10)
  generativeTexture() // updates the texture
  scale(2)
  // for(let i=0; i<3; i+=1){
   // changes the size of the obj
  texture(tex) // adds the texture to the obj
  noStroke()
  //var rand = Math.floor(Math.random()*obj.length)
  // rotateX(frameCount * i*0.001) // rotates the obj on the X axis
  // rotateY(frameCount * i*0.001) // rotates the obj on the Y axis
  // translate(i,100,i*10)
  // translate(random(100),random(100),50)
  model(obj0)
  // translate(1,-50,20)
  // model(obj0)
// }





  // let rand= random(objs)
  // model(rand)
   // draws the obj to the screen

  //
  //


}
