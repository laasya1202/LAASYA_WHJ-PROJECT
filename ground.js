class ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.8,
            density: 1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        fill(225)
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}