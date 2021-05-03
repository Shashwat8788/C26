class Sling{
    constructor(body1,pos2){
        var options = {
            bodyA:body1,
            //bodyB:body2,
            pointB:pos2,
            stiffness:0.04,
            length:10
        }
       this.chain = Constraint.create(options);
       World.add(world,this.chain);
       
    }

    display (){
        var pointA = this.chain.bodyA.position;
        //var pointB = this.chain.bodyB.position;
        var pointB = this.chain.pointB;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}