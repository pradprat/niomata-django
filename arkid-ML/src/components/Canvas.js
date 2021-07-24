import React, { Component } from "react";
import stroller0 from "../assets/images/changeTexture/stroller_0.jpg";
import stroller1 from "../assets/images/changeTexture/stroller_1.png";
var normal = new Image();
normal.src = stroller0;
var mod = new Image();
mod.src = stroller1;
class Canvas extends Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);
    }

    isPainting = false;
    line = [];
    prevPos = { offsetX: 0, offsetY: 0 };

    onMouseDown({ nativeEvent }) {
        if (this.props.type == "pencil") {
            const { offsetX, offsetY } = nativeEvent;
            this.isPainting = true;
            this.prevPos = { offsetX, offsetY };
        } else if (this.props.type == "fill") {
            const rect = this.canvas.getBoundingClientRect();
            const x = Math.round(nativeEvent.clientX - rect.left);
            const y = Math.round(nativeEvent.clientY - rect.top);
            const fillColor = this.hexToRgb(this.props.fillColor);
            console.log([fillColor.r, fillColor.g, fillColor.b, fillColor.a]);
            this.floodFill(
                this.ctx,
                x,
                y,
                [fillColor.r, fillColor.g, fillColor.b, fillColor.a],
                128
            );
        } else if (this.props.type == "eraser") {
            const { offsetX, offsetY } = nativeEvent;
            this.isPainting = true;
            this.prevPos = { offsetX, offsetY };
        }
    }

    onMouseMove({ nativeEvent }) {
        if (this.props.type == "pencil") {
            if (this.isPainting) {
                const { offsetX, offsetY } = nativeEvent;
                const offSetData = { offsetX, offsetY };
                this.position = {
                    start: { ...this.prevPos },
                    stop: { ...offSetData },
                };
                this.line = this.line.concat(this.position);
                // this.paint(
                //     this.prevPos,
                //     offSetData,
                //     this.props.strokeColor,
                //     this.props.strokeWidth
                // );
                this.ctx.drawImage(
                    mod,
                    offsetX - 10,
                    offsetY - 10,
                    20,
                    20,
                    offsetX - 10,
                    offsetY - 10,
                    20,
                    20
                );
            }
        } else if (this.props.type == "eraser") {
            if (this.isPainting) {
                const { offsetX, offsetY } = nativeEvent;
                const offSetData = { offsetX, offsetY };
                this.position = {
                    start: { ...this.prevPos },
                    stop: { ...offSetData },
                };
                this.line = this.line.concat(this.position);
                // this.paint(
                //     this.prevPos,
                //     offSetData,
                //     "#FFFFFF",
                //     this.props.strokeWidth
                // );
                this.ctx.drawImage(
                    normal,
                    offsetX - 10,
                    offsetY - 10,
                    20,
                    20,
                    offsetX - 10,
                    offsetY - 10,
                    20,
                    20
                );
            }
        }
    }

    endPaintEvent() {
        if (this.isPainting) {
            this.isPainting = false;
        }
    }

    paint(prevPos, currPos, strokeStyle, strokeWidth) {
        console.log(strokeStyle);
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = prevPos;
        this.ctx.lineWidth = strokeWidth;
        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(offsetX, offsetY);
        this.ctx.stroke();
        // console.log(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));

        this.prevPos = { offsetX, offsetY };
    }

    getPixel(imageData, x, y) {
        if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
            return [255, 255, 255, 255]; // fill all canvas
        } else {
            const offset = (y * imageData.width + x) * 4;
            return imageData.data.slice(offset, offset + 4);
        }
    }

    setPixel(imageData, x, y, color) {
        const offset = (y * imageData.width + x) * 4;
        imageData.data[offset + 0] = color[0];
        imageData.data[offset + 1] = color[1];
        imageData.data[offset + 2] = color[2];
        imageData.data[offset + 3] = color[3];
    }

    colorsMatch(a, b, rangeSq) {
        // console.log(a);
        const dr = a[0] - b[0];
        const dg = a[1] - b[1];
        const db = a[2] - b[2];
        const da = a[3] - b[3];
        return dr * dr + dg * dg + db * db + da * da < rangeSq;
    }

    floodFill(ctx, x, y, fillColor, range = 1) {
        const imageData = ctx.getImageData(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
        );
        const visited = new Uint8Array(imageData.width, imageData.height);
        console.log(visited);
        const targetColor = this.getPixel(imageData, x, y);
        const rangeSq = range * range;
        if (!this.colorsMatch(targetColor, fillColor, rangeSq)) {
            const pixelsToCheck = [x, y];
            while (pixelsToCheck.length > 0) {
                const y = pixelsToCheck.pop();
                const x = pixelsToCheck.pop();

                const currentColor = this.getPixel(imageData, x, y);

                if (
                    !visited[y * imageData.width + x] &&
                    this.colorsMatch(currentColor, targetColor, rangeSq)
                ) {
                    this.setPixel(imageData, x, y, fillColor);
                    visited[y * imageData.width + x] = 1; // mark we were here already
                    pixelsToCheck.push(x + 1, y);
                    pixelsToCheck.push(x - 1, y);
                    pixelsToCheck.push(x, y + 1);
                    pixelsToCheck.push(x, y - 1);
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }
    }

    hexToRgb = (hex) => {
        if (hex.length > 7) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                hex
            );
            console.log(result);
            return {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a: parseInt(result[4], 16),
            };
        } else {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            console.log(result);
            return {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a: 255,
            };
        }
    };

    componentDidMount() {
        this.canvas.width = this.props.width;
        this.canvas.height = this.props.height;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = 5;
        this.ctx.drawImage(
            normal,
            0,
            0
            // this.canvas.width,
            // this.canvas.height
        );
    }

    render() {
        return (
            <canvas
                ref={(ref) => (this.canvas = ref)}
                style={{
                    background: "#ffffff",
                    cursor: "crosshair",
                }}
                className="paint-draw-canvas"
                onMouseDown={this.onMouseDown}
                onMouseLeave={this.endPaintEvent}
                onMouseUp={this.endPaintEvent}
                onMouseMove={this.onMouseMove}
            />
        );
    }
}

export default Canvas;
