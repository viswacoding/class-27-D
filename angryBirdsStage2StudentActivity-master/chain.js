class chain{
    constructer(bodyA,bodyB){
      var options={
         bodyA: bodyA,
         bodyB: bodyB ,
         stiffness: 0.2,
         length: 10
      }  
      this.chain=constrained.create(options)
      World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeigth(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
