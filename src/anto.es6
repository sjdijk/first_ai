import Player from "./player.es6";
import Keyboard from "./keyboard.es6";

export default class Enemy {
    constructor(x,y) {
        this.props ={
            x: 0,
            y: 0,
                dist: {
                    x :0,
                    y: 0
                },
            drag: Math.random() * 0.1 - 1,
            speed: 1,
            w: 100,
            h: 100,
            life: 100,
            damage: 33.6,
            color: "rgb(50,0,50)",

        },
        this.player = [x,y];
        this.keydown = new Keyboard();
        this.player = new Player();

    }

    move() {


        console.log("distance-X "+ this.props.dist.x);
        console.log("distance-Y "+ this.props.dist.y);

        if(this.props.dist.x > 0) {
            this.props.x -= this.props.speed;
        }else{
            this.props.x += this.props.speed;
        }
        if(this.props.dist.y > 0) {
            this.props.y -= this.props.speed;
        }else{
            this.props.y += this.props.speed;
        }

    }
    draw(context){
        context.fillStyle = this.props.color;
        context.fillRect(
            this.props.x,
            this.props.y,
            this.props.w,
            this.props.h);
    }
    drag(){
        math.random() *1 -2;
    }

}

module.exports = Enemy;
