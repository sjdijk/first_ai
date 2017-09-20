export default class Dot {
    constructor(x,y){
        this.props = {
            x: x,
            y: y,
            size: 1,
            isDead: false,

            img: "../img/test.png",
            vel: {
                x: Math.random() * 2 - 2,
                y: Math.random() * 8 - 10
            },
            color: this.randomColor(),
            gravity: 1
        }
    }

    move() {
        if(this.props.y < 0 || this.props.y > window.innerHeight || this.props.x < 0 || this.props.x > window.innerWidth){
            this.props.isDead = true;
        }

        this.props.vel.y += this.props.gravity;

        this.props.x += this.props.vel.x;
        this.props.y += this.props.vel.y;

        if(this.props.y >= window.innerHeight){
            this.props.y += this.props.y + this.props.vel.y;
        }
    }

    draw(context) {

        context.beginPath();
        context.arc(this.props.x, this.props.y, this.props.size, 0, 2*Math.PI);
        context.fillStyle = this.props.color;
        context.fill();

    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
}
