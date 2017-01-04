var canvasHeight, canvasWidth;
var canvas = $("#mainCanvas");



$(document).ready(function(){
    initCanvas();
});

function initCanvas(){
    canvas = $("#mainCanvas");
    canvasHeight = window.innerHeight;
    canvasWidth = canvasHeight / 1.618;
    canvas.height(canvasHeight);
    canvas.width(canvasWidth);
}