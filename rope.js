class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
		
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		// ({
		// 		pointA: {x:100,y:20},
		// 		pointB:bob1,
		// 		pointB: {x:0,y:0},
		// 		length:100,
		// 		stiffness:0.1
		// })

		 var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+this.offsetX
        //var Anchor2Y = pointB.y+this.offsetY
		var Anchor2Y = pointB.y
         //How to set offset Y?
        //line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
		line(Anchor1X,Anchor1Y, Anchor2X,Anchor2Y)
	}

}