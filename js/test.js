// cavas

//cavans测试


var c = document.getElementById("demo"); //选择ID
c.width = window.innerWidth; //设置宽高
c.height = window.innerHeight; //设置宽高
var cxt = c.getContext("2d");

function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.draw = function() {
        console.log("323");
        cxt.fillStyle = color;
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        cxt.closePath();
        cxt.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        };
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        };
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

}
var circleArray = [];
for (var i = 0; i < 300; i++) {
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dy = (Math.random() - 0.5);
    var dx = (Math.random() - 0.5);
    var radius = Math.random() * 5;
    var arr = ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)"]
    var color = Math.floor((Math.random() * arr.length));
    circleArray.push(new Circle(x, y, dx, dy, radius, arr[color]));
    var circle = new Circle(200, 200, 3, 3, 20);
}

function animate() {
    requestAnimationFrame(animate);
    cxt.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();