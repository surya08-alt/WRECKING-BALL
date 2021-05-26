class SlingShot {
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.4,
    length:200
    }
    this.pointB=pointB
     this.launcher=Constraint.create(options)
     World.add(world,this.launcher)
  }
    
    
     display(){
     if(this.launcher.bodyA){
     var pointA=this.launcher.bodyA.position  
     var pointB=this.launcher.pointB
      strokeWeight(3)
     line(pointA.x,pointA.y,pointB.x,pointB.y)
  }}}