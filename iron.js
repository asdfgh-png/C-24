class iron{
 constructor(x,y,width,height){
     var options = {
         'restitution': 1 ,
         'friction': 0.5 ,
         ' density': 10 
     }
     this.body = Bodies.rectangle(x,y,width,height);
     this.height = height ;
     this.width = width ;
     World.add(world,this.body);
    
 }
 display(){
     var pos = this.body.position ;
     var angle = this.body.angle ;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("silver");
     rect(0,0,this.width,this.height);
     pop();
 }
};