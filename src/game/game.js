import React, {useEffect, useRef, useState} from 'react';

import './game.sass';

const Game = (props) => {
    let canvasRef = useRef(null);
    // const [count, setCount] = useState(500)
    // let balls = [];

    function myTest() {
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        // ctx.clearRect(0, 0, width, height);
        // let img = document.getElementById('cat');
        // let cat = ctx.createPattern(img, "repeat");
        // ctx.rect(0, 0, 150, 100);
        // ctx.fillStyle = cat;
        // ctx.fill();


        function random(min, max) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNum;
        }

        function Ball(x, y, velX, velY, color, size, imgWidth, imgHeight) {
            this.x = x;
            this.y = y;
            this.velX = velX;
            this.velY = velY;
            this.color = color;
            this.size = size;
            this.imgWidth = imgWidth;
            this.imgHeight = imgHeight;

        }

        Ball.prototype.draw = function() {
            let img = document.getElementById('cat');

            let cat = ctx.createPattern(img, "no-repeat");
            ctx.beginPath();
            ctx.fillStyle = cat;

            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
            // let imageObj = new Image();
            //
            // imageObj.onload = function() {
            //     ctx.drawImage(imageObj, this.x, this.y, 25, 25);
            // };
            // imageObj.src = 'https://i.ibb.co/0VhsLjf/cat.png';
        }
        Ball.prototype.update = function() {
            if ((this.x + this.size) >= width) {
                this.velX = -(this.velX);
            }

            if ((this.x - this.size) <= 0) {
                this.velX = -(this.velX);
            }

            if ((this.y + this.size) >= height) {
                this.velY = -(this.velY);
            }

            if ((this.y - this.size) <= 0) {
                this.velY = -(this.velY);
            }

            this.x += this.velX;
            this.y += this.velY;
        }

        let balls = [];

        function loop() {
            // ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
            ctx.fillRect(0, 0, width, height);

            while (balls.length < 25) {
                let ball = new Ball(
                    50,
                    150,
                    4,
                    4,
                    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
                    25,
                    25,
                    25
                );
                balls.push(ball);
            }

            for (let i = 0; i < balls.length; i++) {
                balls[i].draw();
                balls[i].update();
            }

            requestAnimationFrame(loop);
        }

        loop();

        let testBall = new Ball(50, 150, 4, 4, 'blue', 25, 25);
        testBall.draw()
        testBall.update();



        console.log('canvas', canvas)
    }

    function handleCLick() {
//         let canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const width = canvas.width;
//         const height = canvas.height;
//
// // function to generate random number
//
//         function random(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//         }
//
// // function to generate random RGB color value
//
//         function randomRGB() {
//             return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
//         }
//
//         class Ball {
//
//             constructor(x, y, velX, velY, color, size) {
//                 this.x = x;
//                 this.y = y;
//                 this.velX = velX;
//                 this.velY = velY;
//                 this.color = color;
//                 this.size = size;
//             }
//
//             draw() {
//                 ctx.beginPath();
//                 ctx.fillStyle = this.color;
//                 ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//                 ctx.fill();
//             }
//
//             update() {
//                 if ((this.x + this.size) >= width) {
//                     this.velX = -(this.velX);
//                 }
//
//                 if ((this.x - this.size) <= 0) {
//                     this.velX = -(this.velX);
//                 }
//
//                 if ((this.y + this.size) >= height) {
//                     this.velY = -(this.velY);
//                 }
//
//                 if ((this.y - this.size) <= 0) {
//                     this.velY = -(this.velY);
//                 }
//
//                 this.x += this.velX;
//                 this.y += this.velY;
//             }
//
//             collisionDetect() {
//                 for (const ball of balls) {
//                     if (!(this === ball)) {
//                         const dx = this.x - ball.x;
//                         const dy = this.y - ball.y;
//                         const distance = Math.sqrt(dx * dx + dy * dy);
//
//                         if (distance < this.size + ball.size) {
//                             ball.color = this.color = randomRGB();
//                         }
//                     }
//                 }
//             }
//
//         }
//
//
//         // setCount(balls);
//
//
//         while (balls.length < count) {
//             const size = 10;
//             const ball = new Ball(
//                 // ball position always drawn at least one ball width
//                 // away from the edge of the canvas, to avoid drawing errors
//                 random(size,width - size),
//                 random(size,height - size),
//                 random(-7,7),
//                 random(-7,7),
//                 randomRGB(),
//                 size
//             );
//
//             balls.push(ball);
//             setTimeout(() => {
//
//             })
//         }
//
//         function loop() {
//             ctx.fillStyle = '#282c34';
//             ctx.fillRect(0, 0,  width, height);
//
//             for (const ball of balls) {
//                 ball.draw();
//                 ball.update();
//                 // ball.collisionDetect();
//             }
//
//             // setTimeout(() => {
//             //     console.log('suk')
//             //     cancelAnimationFrame(loop);
//             //
//             // }, 5000)
//             requestAnimationFrame(loop);
//
//         }
//         setTimeout(() => {
//
//
//         }, 2000)
//         loop();

    }

    useEffect(() => {
        myTest();
        handleCLick();
        // setInterval(() => {
        //     console.log('count', count)
        //     // setCount(1000)
        // }, 3000)
        // console.log('canvas', canvas)
    })

    return (
        <div className="game">
            <img id="cat" src="https://i.ibb.co/0VhsLjf/cat.png" alt="cat"/>
            <canvas width={window.innerWidth} height={window.innerHeight - 70} className="game__canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default Game;