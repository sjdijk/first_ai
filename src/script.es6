import Dot from "./dot.es6";
import Enemy from "./anto.es6";
import Rect from "./rect.es6";
import Player from "./player.es6";
import Keyboard from "./keyboard.es6";

class Controller {
    constructor() {
        this.dots = [];
        this.rect = [];
        this.player = [];
        this.anto = [];

        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");

        this.keydown = new Keyboard();
        this.player = new Player();
        this.anto = new Enemy();

        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });
        this.mousePos = {
            x: 0,
            y: 0
        };
        this.antoPo ={
            x: 300,
            y: 300
        }

        this.loop();
    }

    loop() {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

        this.anto.props.dist.x = this.anto.props.x - this.player.props.x;
        this.anto.props.dist.y = this.anto.props.y - this.player.props.y;

       // console.log(this.player.length);
      //  console.log(this.rect.length);
      //  console.log(this.dots.length);

        this.dots.forEach(dot => {
            dot.move();
            dot.draw(this.context);
        });

        this.anto.move();
        this.anto.draw(this.context);

        //spawn Le player
        this.player.move(this.keydown.location);
        this.player.draw(this.context);

        this.rect.forEach(rect => {
            rect.move();
            rect.draw(this.context);
        });
        this.dots.push(new Dot(this.mousePos.x, this.mousePos.y));
        this.rect.push(new Rect(this.mousePos.x, this.mousePos.y));
        this.dots = this.dots.filter( dot => {
            return !dot.props.filter;
        });
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

var c = new Controller();
