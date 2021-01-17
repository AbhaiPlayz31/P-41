class Drop{

    constructor(x,y){
        var options={
            restitiution: 0.1,
            friction: 0.001
        }

        this.body = Bodies.circle(x,y,3,options)
        World.add(world, this.body);
    }

    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,800)})
        }
    }

    display(){
        ellipseMode(RADIUS);
        fill("Aqua")
        ellipse(this.body.position.x, this.body.position.y, 3,3);

    }











}