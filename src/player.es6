import Keyboard from "./keyboard.es6";

export default class Player {
    constructor(x,y) {
        // noinspection JSAnnotator
        this.props = {
            x: window.innerWidth/2,
            y: window.innerHeight/2,
            w: 10,
            h: 10,
            life: 100,
            color: "rgb(255,0,0)"
        };
        this.key = new Keyboard();
    }
    draw(context) {
        context.fillStyle = this.props.color;
        context.fillRect(
            this.props.x,
            this.props.y,
            this.props.w,
            this.props.h)
    }
    move(control) {
        if (control.left && this.props.x <= window.innerWidth - window.innerWidth) {
            this.props.x = 0;
        } else if (control.left) {
            this.props.x -= 5;
            console.log(this.props.x);
        }

        if (control.right && this.props.x >= window.innerWidth - 20) {
            this.props.x = window.innerWidth;
        } else if (control.right === true) {
            this.props.x += 5;
            console.log(this.props.x);
        }

        if (control.down && this.props.y >= window.innerHeight - 10) {
            this.props.y === window.innerHeight;
        } else if (control.down) {
            this.props.y += 5;
            console.log(this.props.x);
        }
        if (control.up && this.props.y <= window.innerHeight - window.innerHeight) {
            this.props.y === 0;
        } else if (control.up) {
            this.props.y -= 10;
        }


    }


 //   randomColor() {
  //      return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
   // }

    get pos1() {
        return {
            x: this.props.x,
            y: this.props.y
        };
    }

}
module.exports = Player;
