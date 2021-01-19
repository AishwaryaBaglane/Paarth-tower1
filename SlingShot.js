class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.bodyA= bodyA
        this.pointB = pointB
       
        World.add(world, this.sling);
        
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    

    display(){
      
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(166,112,53)
            pop();
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        
        }
    }
   
}