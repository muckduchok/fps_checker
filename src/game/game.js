import React, {useEffect, useRef, useState} from 'react';

import './game.sass';

const Game = (props) => {
    let canvasRef = useRef(null);
    const [count, setCount] = useState(500)
    let balls = [];

    function handleCLick() {
        let canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

// function to generate random number

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

// function to generate random RGB color value

        function randomRGB() {
            return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
        }

        class Ball {

            constructor(x, y, velX, velY, color, size) {
                this.x = x;
                this.y = y;
                this.velX = velX;
                this.velY = velY;
                this.color = color;
                this.size = size;
            }

            draw() {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                ctx.fill();
            }

            update() {
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

            collisionDetect() {
                for (const ball of balls) {
                    if (!(this === ball)) {
                        const dx = this.x - ball.x;
                        const dy = this.y - ball.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < this.size + ball.size) {
                            ball.color = this.color = randomRGB();
                        }
                    }
                }
            }

        }


        // setCount(balls);


        while (balls.length < count) {
            const size = 10;
            const ball = new Ball(
                // ball position always drawn at least one ball width
                // away from the edge of the canvas, to avoid drawing errors
                random(size,width - size),
                random(size,height - size),
                random(-7,7),
                random(-7,7),
                randomRGB(),
                size
            );

            balls.push(ball);
            setTimeout(() => {

            })
        }

        function loop() {
            ctx.fillStyle = '#282c34';
            ctx.fillRect(0, 0,  width, height);

            for (const ball of balls) {
                ball.draw();
                ball.update();
                // ball.collisionDetect();
            }

            // setTimeout(() => {
            //     console.log('suk')
            //     cancelAnimationFrame(loop);
            //
            // }, 5000)
            requestAnimationFrame(loop);

        }
        setTimeout(() => {


        }, 2000)
        loop();

    }

    useEffect(() => {
        handleCLick();
        setInterval(() => {
            console.log('count', count)
            // setCount(1000)
        }, 3000)
    })

    return (
        <div className="game">
            <canvas width={window.innerWidth} height={window.innerHeight - 70} className="game__canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default Game;