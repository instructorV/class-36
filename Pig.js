class pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/enemy.png")
    }

    display(){
        console.log(this.body.speed)
        
        if(this.body.speed<6){
            super.display()
        }
        else{
            Matter.World.remove(world1,this.body)
           
        }
    }

}