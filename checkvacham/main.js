let rec1 = new Rectangle(150, 80)
let rec2 = new Rectangle(150, 80)
let rec3 = new Rectangle(150, 80)
let circle1 = new Circle(30)
let circle2 = new Circle(30)
let circle3 = new Circle(30)
let ctx = document.getElementById("canvas").getContext("2d")

//check va chạm 2 hình CN: rec1 và rec2
let x1 = 100
let y1 = 100
let x2 = 150
let y2 = 400
let interval1;

function move1() {
    y1 += 5
}

function draw1() {
    ctx.clearRect(0, 0, 1200, 600)
    move1()
    if (y1 === 500) {
        y1 = 100
    }
    if (isCollision1(rec1, rec2)) {
        stop1()
        alert("Die!")
    }
    rec1.drawRectangle(x1, y1, "red")
    rec2.drawRectangle(x2, y2, "blue")
}

function run1() {
    interval1 = setInterval(draw1, 50)
}

function stop1() {
    clearInterval(interval1)
}

function isCollision1(rect1, rect2) {
    let distX = (x1 + (rect1.width / 2)) - (x2 + (rect2.width) / 2);
    if (distX < 0)
        distX = -distX;

    const distW = (rect1.width + rect2.width) / 2;

    let distY = (y1 + (rect1.height / 2)) - (y2 + (rect2.height) / 2);
    if (distY < 0)
        distY = -distY;

    const distH = (rect1.height + rect2.height) / 2;

    return (distX <= distW && distY <= distH);
}

//check va chạm 2 hình tròn: circle1 và circle2
let a1 = 400
let b1 = 100
let a2 = 400
let b2 = 400
let interval2;

function move2() {
    b1 += 5
}

function draw2() {
    ctx.clearRect(0, 0, 1200, 600)
    move2()
    if (b1 === 500) {
        b1 = 100
    }
    if (isCollision2(circle1, circle2)) {
        stop2()
        alert("Die!")
    }
    circle1.drawCircle(a1, b1, "red")
    circle2.drawCircle(a2, b2, "blue")
}

function run2() {
    interval2 = setInterval(draw2, 50)
}

function stop2() {
    clearInterval(interval2)
}

function distance() {
    return (a1 - a2) * (a1 - a2) + (b1 - b2) * (b1 - b2);
}

function isCollision2(c1, c2) {
    return ((c1.radius + c2.radius) * (c1.radius + c2.radius) > distance());
}


//check va chạm hình tròn và hình CN: circle3 và rec3
let q1 = 770
let w1 = 100
let q2 = 700
let w2 = 400
let interval3;

function move3() {
    w1 += 5
}

function draw3() {
    ctx.clearRect(0, 0, 1200, 600)
    move3()
    if (w1 === 500) {
        w1 = 100
    }
    if (isCollision3(circle3, rec3)) {
        stop3()
        alert("Die!")
    }
    circle3.drawCircle(q1, w1, "red")
    rec3.drawRectangle(q2, w2, "blue")
}

function run3() {
    interval3 = setInterval(draw3, 50)
}

function stop3() {
    clearInterval(interval3)
}

function isCollision3(cir, rect) {
    let Ax = q1;
    let Ay = w1;

    let rect_left = q2;
    let rect_top = w2;
    let rect_right = q2 + rect.width;
    let rect_bottom = w2 + rect.height;

    if (q1 < rect_left)
        Ax = rect_left;
    else if (q1 > rect_right)
        Ax = rect_right;

    if (w1 < rect_top)
        Ay = rect_top;
    else if (w1 > rect_bottom)
        Ay = rect_bottom;

    let dx = q1 - Ax;
    let dy = w1 - Ay;

    return (dx * dx + dy * dy) <= cir.radius * cir.radius;
}
