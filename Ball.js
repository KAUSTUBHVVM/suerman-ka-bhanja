class Ball{
    constructor(x,y,w,h)
    {
        var options = {
          'frictionAir': 0.005,
          'density': 1
        }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    }
display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipse(0,0,this.w,this.h);
    pop();
}
}