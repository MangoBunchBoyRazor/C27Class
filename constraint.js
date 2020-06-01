class constraint{
    constructor(body1,body2){
        this.bodyA = body1.body;
        this.bodyB = body2.body;
        //console.log(this.bodyA);
        this.length = 50;
        this.stiffness = 0.5;
        /*let options = {
            bodyA: this.bodyA.body,
            bodyB: this.bodyB.body,
            length: this.length,
            stiffness: this.stiffness
        };*/
        this.cons = Constraint.create({ 
            bodyA: body1.body,
            bodyB: body2.body,
            length: this.length,
            stiffness: this.stiffness 
        });
        World.add(world,this.cons);
    }
    display(){
        let pos1 = this.bodyA.position;
        let pos2 = this.bodyB.position;
        push();
        strokeWeight(5);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        pop();
    }
}