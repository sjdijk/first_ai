export default class Keyboard {
    constructor() {
        this.props ={
            left: false,
            right: false,
            up: false,
            down: false
        }


        window.addEventListener("keydown", keyPress => {

            if (keyPress.keyCode === 37) {
                this.props.left = true;
            }
            if (keyPress.keyCode === 38) {

                this.props.up = true;
            }
            if (keyPress.keyCode === 39) {
                this.props.right = true;
            }

            if (keyPress.keyCode === 40) {
                this.props.down = true;
            }
        });

        window.addEventListener("keyup", keyUp => {
            if (keyUp.keyCode === 37) {
                this.props.left = false;
            }
            if (keyUp.keyCode === 38) {
                this.props.up = false;
            }
            if (keyUp.keyCode === 39) {
                this.props.right = false;

            }
            if (keyUp.keyCode === 40) {
                this.props.down = false;
            }
        });
    }

 get location (){
        return {
            left: this.props.left,
            right: this.props.right,
            up: this.props.up,
            down: this.props.down
        };
    }
}

