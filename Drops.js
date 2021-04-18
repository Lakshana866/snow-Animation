class Drop{
    constructor(x, y, radius) {
        var options = {
            'density': 0.1,
            'restitution':0.1,
            'friction':0.001
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      update(){
          if(this.body.position.y > height){
              Matter.Body.setPosition(this.body, {x:random(0, 800), y:random(0, 200)})
          }
      }
      display(){
        
        fill("white")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
        
      }
}