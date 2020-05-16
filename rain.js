class Rain{
    constructor(x, y){
    var options = {
        restitution: 0.8, 
        friction: 1.0,
        density: 1.0,
        isStatic: false
    }
    this.body = Bodies.rectangle(random(10, 790), 0, 5, 5, options);
    this.width = 5;
    this.height = 5;
    this.image = loadImage("nums/0.png");
    World.add(world, this.body);
}

display(){
    var a = Math.round(random(0, 9));
    
        
        if(a == 1){
            this.image = loadImage("nums/1.png");
        }

        if(a == 2){
            this.image = loadImage("nums/2.png");
        }
        if(a == 3){
            this.image = loadImage("nums/3.png");
        }

        if(a == 4){
            this.image = loadImage("nums/4.png");
        }

        if(a == 5){
            this.image = loadImage("nums/5.png");
        }

        
    
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        
    
}
}