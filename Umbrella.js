class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.manimg = loadImage("man.png")
        this.umbrella = Bodies.circle(x,y,50,options)
        this.radius = 50;
        World.add(world,this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.manimg,pos.x,pos.y,300,300)
    }
}