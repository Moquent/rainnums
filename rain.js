class Rain{
    constructor(x, y){
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic': false
    }

    this.body = Bodies.rectangle(x, y, 5, 5, options);
    this.width = 5;
    this.height = 5;
    World.add(world, this.body);
}

display(){
    for (var i = random(0, 9), i < 10, i = random(0, 9))
    {
        var a = random(0, 9);
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

        if(a == 6){
            this.image = loadImage("nums/6.png");
        }

        if(a == 7){
            this.image = loadImage("nums/7.png");
        }

        if(a == 8){
            this.image = loadImage("nums/8.png");
        }

        if(a == 9){
            this.image = loadImage("nums/9.png");
        }

        if(a == 0){
            this.image = loadImage("nums/0.png");
        }
        
        image = (this.image, random(10, 790), 0)

    }
}