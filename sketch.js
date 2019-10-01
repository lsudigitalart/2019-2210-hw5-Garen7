var time = 0

function setup(){
  createCanvas(innerWidth, innerHeight)
  noFill()
  stroke(0)
  background(256)
}

function draw(){
  background(256,256,256,8)
  translate(width*cos(time/2)/2+width/2,height*sin(time/3)/2+height/2)
  scale(2)
  rotate(time)
  bezier(0,0, random(width), random(height), random(width), random(height), random(width), random(height))
  time+=.02
}
