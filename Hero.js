class Hero {
  
	constructor(x,y,r) {
	 var props={
	  density : 1,
	  frictionAir : 1
     }
	
	 this.x = x
	 this.y = y
	 this.r = r
	 this.body=Bodies.circle(this.x, this.y, this.r,props)
	 World.add(world, this.body);
	 this.image=loadImage("Superhero-01.png")
   }
  display(){
	  push()
	  imageMode(CENTER)
	  image(this.image, this.body.position.x, this.body.position.y, 200, 200)
	  pop()
  }
    
}

 