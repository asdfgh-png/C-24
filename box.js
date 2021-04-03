class box{
    constructor(x,y,height,width){
        var options = {
            'restitution': 0.5 ,
            'friction': 0.5 ,
            'density': 3
}
this.body = Bodies.rectangle(x,y,width,height,options);
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
fill("brown");
rect(0,0,this.width,this.height);
pop();
}

};