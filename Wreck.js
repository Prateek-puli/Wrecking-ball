class Wreck{
    constructor(x, y, w, h){
        var options={
            frictionAir:0.004,
            density:1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}