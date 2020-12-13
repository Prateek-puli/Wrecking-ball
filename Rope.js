class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        if(this.rope.bodyA){
        var A = this.rope.bodyA.position;
        var B = this.pointB;
        push();
        
        fill("white");
        line(B.x, B.y, A.x, A.y);
        pop();
        }
    }
}